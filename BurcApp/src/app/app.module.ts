import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AnasayfaPage } from '../pages/anasayfa/anasayfa';
import { BurcDetayPage } from '../pages/burc-detay/burc-detay';

import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
  apiKey: 'AIzaSyDHAMkqraFojfbBpmN1GNDZ8ETIwdNsfgk',
  authDomain: 'burcapp.firebaseapp.com',
  databaseURL: 'https://burcapp.firebaseio.com',
  storageBucket: 'burcapp.appspot.com',
  messagingSenderId: '202092061028'
};

@NgModule({
  declarations: [
    MyApp,
    AnasayfaPage,
    BurcDetayPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '', // "Geri" yazılabilir
    }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AnasayfaPage,
    BurcDetayPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
