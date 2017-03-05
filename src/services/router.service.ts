import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RouterService {
    private changeRootEmitter: EventEmitter<any> = new EventEmitter();

    constructor() {}

    changeRoot(newRoot: string): void {
        this.changeRootEmitter.emit(newRoot);
    }

    getChangeRootEmitter(): EventEmitter<any> {
        return this.changeRootEmitter;
    }

}