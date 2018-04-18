import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../../../shared/models/user.model';
import { GithubAPIService } from '../../../../shared/services/githubAPI.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
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
