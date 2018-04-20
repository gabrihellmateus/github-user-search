import { Component, Input } from '@angular/core';
import { User } from '@app/shared/models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() user: User;

  constructor() {}
}
