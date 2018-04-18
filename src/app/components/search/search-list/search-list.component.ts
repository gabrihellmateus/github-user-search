import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../../shared/models/user.model';
import { GithubAPIService } from '../../../shared/services/githubAPI.service';

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
