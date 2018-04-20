import { Component, Input } from '@angular/core';
import { UserRepository } from '@app/shared/models';

@Component({
  selector: 'app-user-repository-item',
  templateUrl: './user-repository-item.component.html',
  styleUrls: ['./user-repository-item.component.scss']
})
export class UserRepositoryItemComponent {
  @Input() repository: UserRepository;

  constructor() {}
}
