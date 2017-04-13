import { Component } from '@angular/core';

@Component({
	selector: 'help-page',
	templateUrl: 'help.page.html'
})

export class HelpPage {
	static title: string = 'Help Page';
	public questions: any[] = [];

	constructor() {
		
	}
}