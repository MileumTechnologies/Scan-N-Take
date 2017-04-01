import { Component, OnInit } from '@angular/core';
import { MessageBus } from '../../../services/message-bus.service';

@Component({
    selector: 'shopping-cart-list',
    templateUrl: 'shopping-cart-list.component.html'
})
export class ShoppingCartListComponent implements OnInit {
    public itemList: any[] = [];

    constructor(private messageBus: MessageBus) { }

    ngOnInit() {

        this.messageBus.subscribe(
            (message) => {
                if (message.command === 'addItemToCart') {
                    this.addItemToCart(message.data);
                } else if (message.command === 'removeItemFromCart') {
                    this.remoteItemFromCart(message.data);
                  }
                }
              );
        this.messageBus.emit({ command: 'addItemToCart', data: {
            name: 'Cocca Colla',
            packaging: '',
            price: 20.00,
            quantity: 1
        }});
        this.messageBus.emit({ command: 'addItemToCart', data: {
            name: 'Cocca Colla',
            packaging: '',
            price: 20.00,
            quantity: 1
        }});
        this.messageBus.emit({ command: 'addItemToCart', data: {
            name: 'Cocca Colla',
            packaging: '',
            price: 20.00,
            quantity: 1
        }});
    }

    private addItemToCart(item: any) {
        let elementIndex = this.itemList.findIndex(
            (elem) => {
                if (elem.name === item.name && elem.packaging === item.packaging)
                    return true;
            }
        );

        console.log(elementIndex);

        if(elementIndex >= 0) {
            this.itemList[elementIndex].quantity += item.quantity;
        } else {
            this.itemList.push(item);
        }
    }

    private remoteItemFromCart(item: any) {
        let elementIndex = this.itemList.findIndex(
            (elem) => {
                if (elem.name === item.name && elem.packaging === item.packaging && elem.price === item.price)
                    return true;
            }
        );

        console.log(elementIndex);

        if(elementIndex >= 0) {
            if(this.itemList[elementIndex].quantity > 1) {
                this.itemList[elementIndex].quantity--;
            }
            else {
                this.itemList.splice(elementIndex, 1);
            }
        }
    }
}
