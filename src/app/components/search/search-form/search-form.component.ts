import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { User } from '@app/shared/models';
import { GithubAPIService } from '@app/shared/services';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  private searchTerms = new Subject<string>();

  constructor(private githubAPIService: GithubAPIService) { }

  ngOnInit() {
    this.searchTerms.pipe(
        debounceTime(this.githubAPIService.debounceTime),
        distinctUntilChanged(),
      )
      .subscribe(term => this.getUsers(term)
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
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
