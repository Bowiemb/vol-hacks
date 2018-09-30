import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WaiterPage } from '../waiter/waiter';
import { SkipperPage } from '../skipper/skipper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushWaiterPage() {
    this.navCtrl.push(WaiterPage);
  }

  pushSkipperPage() {
    this.navCtrl.push(SkipperPage);
  }
}
