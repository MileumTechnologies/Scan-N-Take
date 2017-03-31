import { Component, OnInit, Input } from '@angular/core';
import { MessageBus } from '../../../services/message-bus.service';

@Component({
    selector: 'shopping-cart-list-item',
    templateUrl: 'shopping-cart-list-item.component.html'
})
export class ShoppingCartListItemComponent implements OnInit {
    @Input() itemData: any;

    constructor(private messageBus: MessageBus) { }

    ngOnInit() { }

    public remove() {
        if (this.itemData) {
            this.messageBus.emit({ command: 'removeItemFromCart', data: this.itemData });
        }
    }
}
