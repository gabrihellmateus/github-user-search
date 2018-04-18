import { Component, OnInit } from '@angular/core';
import { GithubAPIService } from '../../shared/services/githubAPI.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  loading: Boolean = false;

  constructor(private githubAPIService: GithubAPIService) {}

  ngOnInit() {
    console.log(this.loading);

    this.loading = this.githubAPIService.loading
      .subscribe((data: Boolean) => {
        console.log(`LOADING ${data}`);
        this.loading = data;
      });
  }
}
