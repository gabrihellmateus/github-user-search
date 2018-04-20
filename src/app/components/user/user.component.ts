import { Component } from '@angular/core';
import { fadeInOutAnimation } from '@app/shared/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [fadeInOutAnimation]
})
export class UserComponent {}
