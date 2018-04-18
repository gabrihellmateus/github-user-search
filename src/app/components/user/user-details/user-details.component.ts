import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { GithubAPIService } from '../../../shared/services/githubAPI.service';
import { User } from '../../../shared/models/user.model';
import { UserDetails } from '../../../shared/models/user-details.model';

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
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.githubAPIService.getUserDetails(params['login'])
          .subscribe(
            (userDetails: UserDetails) => {
              this.user = userDetails;
            }
          );
        }
      );
  }
}
