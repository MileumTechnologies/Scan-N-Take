import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageBus } from '../../services/message-bus.service';

@Component({
    selector: 'whishlist-page',
    templateUrl: 'whishlist.page.ts'
})
export class WhishlistPage {
    static title: string = 'Whishlist';

    constructor(private messageBus: MessageBus) {}
}