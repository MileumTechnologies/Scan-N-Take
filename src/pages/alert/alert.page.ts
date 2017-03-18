import { Component } from '@angular/core';


@Component({
  selector: 'alert-page',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.css']
})

export class AlertComponent {
	title = 'Alert';
	message = 'Lorem ipsum dolor sit amet, et massa sed libero scelerisque per, mollis volutpat magna dictum ante consequat. Pellentesque in, lorem fusce et tellus justo tristique, diam mi in sed.';
	button1 = 'OK';
	button2 = 'Cancel';
}