import { Component, OnInit } from '@angular/core';
import { MessageBus } from '../../services/message-bus.service';

@Component({
    selector: 'shopping-cart-page',
    templateUrl: 'shopping-cart.page.html'
})
export class ShoppingCartPage implements OnInit {
    public title: string = 'Shopping Cart';
    public totalPrice: number = 0; 

    constructor(private messageBus: MessageBus) {}

    ngOnInit() {
        this.messageBus.subscribe(
            (message) => {
                if(message.command === 'addItemToCart') {
                    this.priceChange('+', message.data.price);
                } else if(message.command === 'removeItemFromCart') {
                    this.priceChange('-', message.data.price);
                }
            }
        )
    }

    private priceChange(operation: string, price: number) {
        console.log('Price change: ', operation, price);
        if(operation === '+') {
            this.totalPrice += price;
        } else if(operation === '-') {
            this.totalPrice -= price;
        }
    }
}