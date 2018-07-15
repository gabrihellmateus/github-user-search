import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { catchError, map, debounceTime, distinctUntilChanged, switchMap, finalize } from 'rxjs/operators';

import { githubAPIConfig } from '@app/app.config';
import { AlertService } from '@app/shared/services/alert.service';
import { Alert, User, UserDetails, UserRepository, UserFollower } from '@app/shared/models';

@Injectable()
export class GithubAPIService {
  debounceTime = 1000;
  userNameUpdated = new EventEmitter();

  constructor(
    private httpClient: HttpClient,
    private alertService: AlertService
  ) {}

  getRateLimit() {
    console.log('GET RATE LIMIT');

    this.httpClient.get(githubAPIConfig.url.rateLimit).subscribe(
      (response: Response) => {
        const data = response['resources']['search'];
        console.log(data);
      });
  }

  getUsers(userName: string) {
    let params = new HttpParams();
    params = params.append('q', userName);

    this.getRateLimit();

    return this.httpClient.get(githubAPIConfig.url.search, {params}).pipe(
      map((response: Response) => {
        const data = response['items'];

        const users: User = data.map(user => {
          return {
            id: user.id,
            login: user.login,
            avatar_url: user.avatar_url
          };
        });

        return users;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  getUserDetails(userName: string) {
    this.getRateLimit();

    return this.httpClient.get(`${githubAPIConfig.url.profile}/${userName}`).pipe(
      map((response: Response) => {
        const userDetails: UserDetails = {
          id: response['id'],
          login: response['login'],
          avatar_url: response['avatar_url'],
          name: response['name'],
          bio: response['bio'],
          email: response['email'],
          blog: response['blog'],
          location: response['location'],
          company: response['company']
        };

        return userDetails;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  getUserRepositories(userName: string) {
    this.getRateLimit();

    return this.httpClient.get(`${githubAPIConfig.url.profile}/${userName}/repos`).pipe(
      map((response: Response) => {
        const data: any = response;

        const repositories: UserRepository = data.map(repository => {
          return {
            name: repository['name'],
            description: repository['description'],
            html_url: repository['html_url'],
            language: repository['language'],
            stargazers_count: repository['stargazers_count'],
            forks_count: repository['forks_count'],
            updated_at: repository['updated_at']
          };
        });

        return repositories;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  getUserUserFollowers(userName: string) {
    this.getRateLimit();

    return this.httpClient.get(`${githubAPIConfig.url.profile}/${userName}/followers`).pipe(
      map((response: Response) => {
        const data: any = response;

        const userFollowers: UserFollower = data.map(userFollower => {
          return {
            login: userFollower['login'],
            avatar_url: userFollower['avatar_url'],
            html_url: userFollower['html_url']
          };
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
