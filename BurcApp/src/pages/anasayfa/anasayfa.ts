import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { BurcDetayPage } from '../burc-detay/burc-detay';

@Component({
  selector: 'page-anasayfa',
  templateUrl: 'anasayfa.html'
})
export class AnasayfaPage {
  public burclar: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.burclar = this.af.database.list("burclar");
  }

  ekleme() {
    console.log("TESTTT");
    this.af.database.object("burclar/balik").set({
      name: "Boğa",
      bilgi: "test"
    }).then(data => {
      console.log(data);
      console.log("eklendi");
    })
  }

  detay(burc) {
    this.navCtrl.push(BurcDetayPage, {
      item: burc
    })
  }

}
