import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shopping-page',
    templateUrl: 'shopping.page.html'
})
export class ShoppingPage implements OnInit {
    static title: string = 'Shopping';

    constructor() {}

    ngOnInit() {
        const timestamp = new Date();
        console.log(timestamp.toLocaleTimeString(), ' ShoppingPage initialized.');
    }
}