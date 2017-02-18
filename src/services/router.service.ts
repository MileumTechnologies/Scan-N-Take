import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RouterService {
  redirect: EventEmitter<any> = new EventEmitter();

  goToLoginPage() {
    this.redirect.emit('login');
  }

  goToRegisterPage() {
    this.redirect.emit('register');
  }

  getRedirectEmitter(): EventEmitter<any> {
    return this.redirect;
  }

}