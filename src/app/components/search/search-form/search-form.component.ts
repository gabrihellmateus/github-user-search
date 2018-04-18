import { Component, OnDestroy, OnInit } from '@angular/core';

import { User } from '../../../shared/models/user.model';
import { GithubAPIService } from '../../../shared/services/githubAPI.service';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  public loading: Boolean;
  public userName: string;

  constructor(private githubAPIService: GithubAPIService) {}

  onUpdateUserName(event: Event) {
    // .pipe(
    //   debounceTime(1000),
    //   distinctUntilChanged()),
    //   switchMap(inputVal => this.getUsers(inputVal))
    // )
    this.userName = (<HTMLInputElement>event.target).value;
    this.githubAPIService.loading.emit(true);
    this.getUsers(this.userName);
  }

  getUsers(userName: string) {
    this.githubAPIService.getUsers(userName).subscribe(
      (users: User[]) => {
        this.githubAPIService.userNameUpdated.emit(users);
        this.githubAPIService.loading.emit(false);
      }
    );
  }
}
