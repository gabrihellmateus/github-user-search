import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { GithubAPIService } from '../../../shared/services/githubAPI.service';
import { User } from '../../../shared/models/user.model';
import { UserDetails } from '../../../shared/models/user-details.model';
import { DataStorageService } from '../../../shared/services';
import { logging } from 'protractor';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private githubAPIService: GithubAPIService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    const login = this.route.snapshot.params['login'];

    this.getUserDetails(login);
  }

  private getUserDetails(login: string) {
    const itemName = `${login}-details`;

    if (!this.dataStorageService.hasData(itemName)) {
      this.githubAPIService.getUserDetails(login)
        .subscribe(
          (userDetails: UserDetails) => {
            console.log('GET REQUEST');

            console.log(userDetails);
            this.user = userDetails;
            this.dataStorageService.setData(itemName, userDetails);
          }
        );
    } else {
      this.user = this.dataStorageService.getData(itemName);
    }
  }
}
