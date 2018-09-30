import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WaiterPage } from '../waiter/waiter';
import { SkipperPage } from '../skipper/skipper';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private http: HttpClient) {

  }

  pushWaiterPage() {
      this.navCtrl.push(WaiterPage);
    }

    pushSkipperPage() {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'origin, content-type, accept'
        })
      };

      // let first = document.getElementById('first').value;
      // let last = document.getElementById('last').value;

      console.log(this.first);
      console.log(this.last);

      let postData = {
        "fname": this.first,
        "lname": this.last
      }


      this.http.post( "https://cors-anywhere.herokuapp.com/http://35.221.22.94/books/add", postData, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      }).subscribe(data => {
          console.log(data['_body']);
         }, error => {
          console.log(error);
        });


      this.navCtrl.push(SkipperPage);
    }
  }
