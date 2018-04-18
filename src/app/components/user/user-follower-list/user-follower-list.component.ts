import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { GithubAPIService } from '../../../shared/services/githubAPI.service';
import { UserFollower } from '../../../shared/models/user-follower.model';
import { fadeInOutAnimation } from '../../../shared/animations/fadeInOut.animation';
import { DataStorageService } from '../../../shared/services';

@Component({
  selector: 'app-user-follower-list',
  templateUrl: './user-follower-list.component.html',
  styleUrls: ['./user-follower-list.component.scss'],
  animations: [fadeInOutAnimation]
})
export class UserFollowerListComponent implements OnInit {
  followers: UserFollower;

  constructor(
    private route: ActivatedRoute,
    private githubAPIService: GithubAPIService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    const login = this.route.snapshot.parent.params['login'];

    this.getFollowers(login);
  }

  private getFollowers(login: string) {
    const itemName = `${login}-followers`;

    if (!this.dataStorageService.hasData(itemName)) {
      this.githubAPIService.getUserUserFollowers(login)
        .subscribe(
          (followers: UserFollower) => {
            this.followers = followers;
            this.dataStorageService.setData(itemName, followers);
          }
        );
    } else {
      this.followers = this.dataStorageService.getData(itemName);
    }
  }
}
