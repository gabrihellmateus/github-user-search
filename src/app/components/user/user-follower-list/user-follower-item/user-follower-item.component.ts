import { Component, OnInit, Input } from '@angular/core';

import { UserFollower } from '../../../../shared/models/user-follower.model';

@Component({
  selector: 'app-user-follower-item',
  templateUrl: './user-follower-item.component.html',
  styleUrls: ['./user-follower-item.component.scss']
})
export class UserFollowerItemComponent {
  @Input() follower: UserFollower;

  constructor() {}
}
