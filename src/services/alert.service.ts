import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AlertService {
  private alertEmitter: EventEmitter<any> = new EventEmitter<any>();

  public getAlertEmitter(): EventEmitter<any> {
    return this.alertEmitter;
  }
}
