import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-skipper',
  templateUrl: 'skipper.html',
})
export class SkipperPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkipperPage');
  }

  addOne(id) {
    let button = document.getElementById(id);
    let val = +button.value;
    val += 1;
    console.log(val);
    button.value = val;
    button.innerHTML = val;
  }

  removeOne(id) {
    if (+document.getElementById(id).value > 0) {
      let button = document.getElementById(id);
      let val = +button.value;
      val -= 1;
      console.log(val);
      button.value = val;
      button.innerHTML = val;
    }
  }
}
