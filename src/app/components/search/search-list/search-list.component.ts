import { Component, OnInit, Input } from '@angular/core';
import { GithubAPIService } from '@app/shared/services';
import { User } from '@app/shared/models';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  usersList: User[];

  constructor(private githubAPIService: GithubAPIService) { }

  ngOnInit() {
    this.githubAPIService.userNameUpdated.subscribe(
      (users: User[]) => {
        this.usersList = users;
      }
    );
  }
}
