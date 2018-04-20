import { Component } from '@angular/core';
import { fadeInOutAnimation } from '@app/shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeInOutAnimation]
})
export class AppComponent {}
