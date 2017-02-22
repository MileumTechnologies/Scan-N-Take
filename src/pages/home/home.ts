import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: Storage, private loginService: LoginService) {
    console.log('User id: ', storage.get('id'));
  }

  logout() {
    this.storage.get('id').then(id => {
      this.loginService.logout(id);
    });
  }

}
