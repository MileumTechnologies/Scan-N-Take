import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MessageBus } from '../../../services/message-bus.service';

@Component({
    selector: 'home-menu-item',
    templateUrl: 'home-menu-item.component.html'
})
export class HomeMenuItemComponent implements OnInit, OnDestroy {
    @Input() itemData: any;

    constructor(private messageBus: MessageBus) {}

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    goToPage(page: string) {
        this.messageBus.emit({ command: 'changePage', data: page });
    }
}