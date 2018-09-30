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
<<<<<<< HEAD
    console.log(id);
    let button = (<HTMLInputElement>document.getElementById(id));
    console.log(button);
    
    let val = Number(button.value);
=======
    let button = <HTMLInputDocument>document.getElementById(id);
    let val = +button.value;
>>>>>>> 8c87b3fab0b81e8c9f26605bae03bcf876f5f91a
    val += 1;
    console.log(val);
    button.value = String(val);
    button.innerHTML = String(val);
   }

  removeOne(id) {
<<<<<<< HEAD
    if (Number((<HTMLInputElement>document.getElementById(id)).value) > 0) {
      let button = (<HTMLInputElement>document.getElementById(id));
      let val = Number(button.value);
=======
    if (+document.getElementById(id).value > 0) {
      let button = <HTMLInputDocument>document.getElementById(id);
      let val = +button.value;
>>>>>>> 8c87b3fab0b81e8c9f26605bae03bcf876f5f91a
      val -= 1;
      console.log(val);
      button.value = String(val);
      button.innerHTML = String(val);
    }
  }
}
