import { Component, Input } from '@angular/core';

import { SplitPipe } from 'angular-pipes';
import { JoinPipe } from 'angular-pipes';

import { UserRepository } from '../../../../shared/models/user-repository.model';

@Component({
  selector: 'app-user-repository-item',
  templateUrl: './user-repository-item.component.html',
  styleUrls: ['./user-repository-item.component.scss']
})
export class UserRepositoryItemComponent {
  @Input() repository: UserRepository;

  constructor() {}
}
