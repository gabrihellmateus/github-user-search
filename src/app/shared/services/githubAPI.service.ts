import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { catchError, map, debounceTime, distinctUntilChanged, switchMap, finalize } from 'rxjs/operators';

import { User } from '../../shared/models/user.model';
import { UserDetails } from '../../shared/models/user-details.model';
import { UserRepository } from '../../shared/models/user-repository.model';
import { AlertService } from './alert.service';
import { Alert } from '../../shared/models/alert.model';
import { UserFollower } from '../../shared/models/user-follower.model';

@Injectable()
export class GithubAPIService {
  private searchUsersURL = 'https://api.github.com/search/users';
  private searchUserDetailsURL = 'https://api.github.com/users';
  private limitPerPage = '5';
  debounceTime = 1000;
  userNameUpdated = new EventEmitter();
  loading: EventEmitter<Boolean> = new EventEmitter();

  constructor(
    private httpClient: HttpClient,
    private alertService: AlertService
  ) {}

  getUsers(userName: string) {
    let params = new HttpParams();
    params = params.append('per_page', this.limitPerPage);
    params = params.append('q', userName);

    return this.httpClient.get(this.searchUsersURL, {params}).pipe(
      map((response: Response) => {
        const data = response['items'];

        const users = data.map(user => {
          return new User({
            login: user.login,
            avatar_url: user.avatar_url
          });
        });

        return users;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  getUserDetails(userName: string) {
    return this.httpClient.get(`${this.searchUserDetailsURL}/${userName}`).pipe(
      map((response: Response) => {
        const userDetails = new UserDetails({
          login: response['login'],
          avatar_url: response['avatar_url'],
          name: response['name'],
          bio: response['bio'],
          email: response['email'],
          blog: response['blog'],
          location: response['location'],
          company: response['company'],
          public_repos: response['public_repos'],
          UserFollowers: response['UserFollowers'],
        });

        return userDetails;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  getUserRepositories(userName: string) {
    let params = new HttpParams();
    params = params.append('per_page', this.limitPerPage);

    return this.httpClient.get(`${this.searchUserDetailsURL}/${userName}/repos`, {params}).pipe(
      map((response: Response) => {
        const data: any = response;

        const repositories = data.map(repository => {
          return new UserRepository({
            name: repository['name'],
            description: repository['description'],
            html_url: repository['html_url'],
            language: repository['language'],
            stargazers_count: repository['stargazers_count'],
            forks_count: repository['forks_count'],
            updated_at: repository['updated_at']
          });
        });

        return repositories;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  getUserUserFollowers(userName: string) {
    let params = new HttpParams();
    params = params.append('per_page', this.limitPerPage);

    return this.httpClient.get(`${this.searchUserDetailsURL}/${userName}/followers`, {params}).pipe(
      map((response: Response) => {
        const data: any = response;

        const userFollowers = data.map(userFollower => {
          return new UserFollower({
            login: userFollower['login'],
            avatar_url: userFollower['avatar_url'],
            html_url: userFollower['html_url']
          });
        });

        return userFollowers;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  handleError(error: any) {
    console.log(error);

    const errorAlert: Alert = {
      status: 'error',
      message: error['error']['message']
    };

    this.alertService.alert.emit(errorAlert);

    return Observable.throw(error);
  }
}
