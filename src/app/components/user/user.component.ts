import { Component } from '@angular/core';
import { fadeInOutAnimation } from '../../shared/animations/fadeInOut.animation';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [fadeInOutAnimation]
})
export class UserComponent {}
