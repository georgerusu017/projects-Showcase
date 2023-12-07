import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"projects-sowcaser","appId":"1:617467174242:web:1cc7d6161e073ab7e3203b","storageBucket":"projects-sowcaser.appspot.com","apiKey":"AIzaSyBgV5Z7HBzl01VXjUT6uQzOYKyEZtDZTI0","authDomain":"projects-sowcaser.firebaseapp.com","messagingSenderId":"617467174242","measurementId":"G-40VFVV8XTT"})), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
