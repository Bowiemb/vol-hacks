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
     let button1 = (<HTMLInputElement>document.getElementById('quantity'));
     let button2 = (<HTMLInputElement>document.getElementById('quantity1'));

     let val1 = Number(button1.value);
     let val2 = Number(button2.value);
     if (id == "quantity") {
       val1++;
     } else {
       val2++;
     }

     let element = document.getElementById('total');
     element.innerHTML = "$" + String(2.19 * val1 + 3.05 * val2);

     if (id == 'quantity') {
       button1.value = String(val1);
       button1.innerHTML = String(val1);
     } else {
       button2.value = String(val2);
       button2.innerHTML = String(val2);
     }
=======
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
>>>>>>> 6ace77c4354509518e5f1836004374725ae073b9
    }

    removeOne(id) {
      if (Number((<HTMLInputElement>document.getElementById(id)).value) > 0) {
        let button1 = (<HTMLInputElement>document.getElementById('quantity'));
        let button2 = (<HTMLInputElement>document.getElementById('quantity1'));

        let val1 = Number(button1.value);
        let val2 = Number(button2.value);
        if (id == "quantity") {
          val1--;
        } else {
          val2--;
        }

        let element = document.getElementById('total');
        element.innerHTML = "$" + String(2.19 * val1 + 3.05 * val2);

        if (id == 'quantity') {
          button1.value = String(val1);
          button1.innerHTML = String(val1);
        } else {
          button2.value = String(val2);
          button2.innerHTML = String(val2);
        }
      }
    }
 }
