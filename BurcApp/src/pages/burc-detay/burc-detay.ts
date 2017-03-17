import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-burc-detay',
  templateUrl: 'burc-detay.html'
})
export class BurcDetayPage {
  public burc;
  public ozellikler = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.burc = navParams.get("item");
    var ozellikler = this.burc.ozellikler;
    for (var key in ozellikler) {
      this.ozellikler.push(ozellikler[key]);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurcDetayPage');
  }

}
