import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GithubAPIService, DataStorageService } from '@app/shared/services';
import { UserFollower } from '@app/shared/models';
import { fadeInOutAnimation } from '@app/shared/animations';

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
