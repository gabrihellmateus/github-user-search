import { TestBed, inject } from '@angular/core/testing';

import { GithubAPIService } from './githubAPI.service';

describe('GithubAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubAPIService]
    });
  });

  it('should be created', inject([GithubAPIService], (service: GithubAPIService) => {
    expect(service).toBeTruthy();
  }));
});
