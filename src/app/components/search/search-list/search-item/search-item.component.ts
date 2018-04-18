import { Component, Input } from '@angular/core';

import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() user: User;

  constructor() {}
}
