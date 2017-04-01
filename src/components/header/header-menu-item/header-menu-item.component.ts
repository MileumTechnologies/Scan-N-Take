import { Component, Input } from '@angular/core';
import { MessageBus } from '../../../services/message-bus.service';

@Component({
    selector: 'header-menu-item',
    templateUrl: 'header-menu-item.component.html'
})
export class HeaderMenuItemComponent {
    @Input() itemData: any;

    constructor(private messageBus: MessageBus) {}

    goToPage(page: string) {
        this.messageBus.emit({ command: 'changeAppPage', data: page });
    }

    logout() {
    	localStorage.removeItem("id");
    	this.messageBus.emit({ command: 'changeAppRootPage', data: 'welcome' });
    }
}