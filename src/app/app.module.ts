import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicApp, IonicErrorHandler, } from 'ionic-angular';

import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { MyApp } from './app.component';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { ResetPasswordPage } from './reset-password/reset-password.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const firebaseConfig = {
  apiKey: "AIzaSyAPA2hqpEcUfzqIydrTMeBNM9QgpxeHsH8",
  authDomain: "tasks-e984d.firebaseapp.com",
  databaseURL: "https://tasks-e984d.firebaseio.com",
  projectId: "tasks-e984d",
  storageBucket: "tasks-e984d.appspot.com",
  messagingSenderId: "85978988754",
  appId: "1:85978988754:web:e6ee759ebf23ff9f102d0b"
};


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    LoginPage,
    RegisterPage,
    ResetPasswordPage
  ],
  entryComponents: [
    HomePage,
    LoginPage,
    RegisterPage,
    ResetPasswordPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireAuthModule, 
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

