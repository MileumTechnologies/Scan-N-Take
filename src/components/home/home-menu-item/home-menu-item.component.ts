import { Component, Input } from '@angular/core';
import { MessageBus } from '../../../services/message-bus.service';

@Component({
    selector: 'home-menu-item',
    templateUrl: 'home-menu-item.component.html'
})
export class HomeMenuItemComponent {
    @Input() itemData: any;

    constructor(private messageBus: MessageBus) {}

    goToPage(page: string) {
        this.messageBus.emit({ command: 'changeAppPage', data: page });
    }
}