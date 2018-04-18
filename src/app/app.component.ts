import { Component } from '@angular/core';

import { fadeInOutAnimation } from './shared/animations/fadeInOut.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeInOutAnimation]
})
export class AppComponent {}
