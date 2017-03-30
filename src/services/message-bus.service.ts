import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MessageBus{
    private eventEmitter: EventEmitter<any>;

    constructor() {
        this.eventEmitter = new EventEmitter<any>();
    }
    
    emit(event: any) {
        this.eventEmitter.emit(event);
    }

    subscribe(fn) {
        return this.eventEmitter.subscribe(fn);
    }
}