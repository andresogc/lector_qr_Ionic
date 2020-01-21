import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Contacts } from '@ionic-native/contacts/ngx';

//mapas
import { GoogleMapsModule } from '@angular/google-maps'

//servicios
import { HistorialService } from './historial.service';

import { MapaPage } from './mapa/mapa.page';



@NgModule({
  declarations: [AppComponent,MapaPage],
  entryComponents: [MapaPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,GoogleMapsModule],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    Contacts,
    HistorialService,
    
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {} 
