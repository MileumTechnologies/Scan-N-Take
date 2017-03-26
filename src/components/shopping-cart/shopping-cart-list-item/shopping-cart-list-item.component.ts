import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'shopping-cart-list-item',
    templateUrl: 'shopping-cart-list-item.component.html'
})
export class ShoppingCartListItemComponent implements OnInit {
    @Input() itemData: any;

    constructor() {}

    ngOnInit() {}
}