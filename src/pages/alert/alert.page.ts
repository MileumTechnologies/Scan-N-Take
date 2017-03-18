import { Component, EventEmitter } from '@angular/core';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'alert-page',
  templateUrl: './alert.page.html'
})

export class AlertComponent {
  private emitter: EventEmitter<any>;
  public show: boolean = false;
	public title: string;
	public message: string;
  public buttons: any[];

  constructor(private alertService: AlertService) {
    this.emitter = this.alertService.getAlertEmitter();
    this.emitter.subscribe(
      (event) => {
        this.title = event.title;
        this.message = event.message;
        this.buttons = event.buttons;
        this.display();
      }
    );
  }

  public buttonClick(buttonName) {
    console.log('Alert button clicked ', buttonName);
    this.hide();
  }

  public display() {
    this.show = true;
  }

  public hide() {
    this.show = false;
  }
}
