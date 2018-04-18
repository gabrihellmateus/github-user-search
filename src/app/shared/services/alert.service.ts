import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AlertService {
  alert = new EventEmitter();

  constructor() {}
}
