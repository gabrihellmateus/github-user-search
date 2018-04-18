import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { GithubAPIService } from '../../../shared/services/githubAPI.service';
import { UserRepository } from '../../../shared/models/user-repository.model';
import { fadeInOutAnimation } from '../../../shared/animations/fadeInOut.animation';
import { User } from '../../../shared/models/user.model';
import { DataStorageService } from '../../../shared/services';

@Component({
  selector: 'app-user-repository-list',
  templateUrl: './user-repository-list.component.html',
  styleUrls: ['./user-repository-list.component.scss'],
  animations: [fadeInOutAnimation]
})
export class UserRepositoryListComponent implements OnInit {
  public repositories: UserRepository;

  constructor(
    private route: ActivatedRoute,
    private githubAPIService: GithubAPIService,
    private dataStorageService: DataStorageService,
  ) {}

  ngOnInit() {
    const login = this.route.snapshot.parent.params['login'];

    this.getRepositories(login);
  }

  private getRepositories(login: string) {
    const itemName = `${login}-respositories`;

    if (!this.dataStorageService.hasData(itemName)) {
      this.githubAPIService.getUserRepositories(login)
        .subscribe(
          (repositories: UserRepository) => {
            this.repositories = repositories;
            this.dataStorageService.setData(itemName, repositories);
          }
        );
    } else {
      this.repositories = this.dataStorageService.getData(itemName);
    }
  }
}
