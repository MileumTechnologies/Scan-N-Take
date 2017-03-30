import { Component, Input } from '@angular/core';
import { MessageBus } from '../../../services/message-bus.service';

@Component({
    selector: 'shopping-menu-item',
    templateUrl: 'shopping-menu-item.component.html'
})
export class ShoppingMenuItemComponent {
    @Input() itemData: any;

    constructor(private messageBus: MessageBus) {

    }

    goToPage(page: string) {
        this.messageBus.emit({ command: 'changeAppPage', data: page });
    }
}