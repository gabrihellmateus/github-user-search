import { Component, OnInit, OnDestroy } from '@angular/core';

import { AlertService } from '../../shared/services/alert.service';
import { Alert } from '../../shared/models/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  alert: Alert;

  constructor(private alertService: AlertService) {}

  ngOnDestroy() {
    this.alert = null;
  }

  ngOnInit() {
    this.alertService.alert.subscribe(
      (alert: Alert) => {
        this.alert = alert;
      });
  }
}
