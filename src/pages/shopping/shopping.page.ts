import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageBus } from '../../services/message-bus.service';

@Component({
    selector: 'shopping-page',
    templateUrl: 'shopping.page.ts'
})
export class ShoppingPage {
    static title: string = 'Shopping';

    constructor(private messageBus: MessageBus) {}
}