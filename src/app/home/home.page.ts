import { Component } from '@angular/core';

/* componentes */
import { ToastController, Platform } from '@ionic/angular';

/* plugins */
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


//servicios
import { HistorialService } from "../historial.service";



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private toastController: ToastController,
              private platform: Platform,
              private _historialService: HistorialService,
              ) {}

  async scan(){
    
    console.log('realizando scaneo')
    
    if (!this.platform.is('cordova')) {
   //   this._historialService.agregar_historial("http://google.com");
   //   this._historialService.agregar_historial("geo:4.6663826,-74.0570736");
  /*  this._historialService.agregar_historial(`BEGIN:VCARD
VERSION:2.1
N:Kent;Clark
FN:Clark Kent
ORG:
TEL;HOME;VOICE:12345
TEL;TYPE=cell:67890
ADR;TYPE=work:;;;
EMAIL:clark@superman.com
END:VCARD`); */
      
    this._historialService.agregar_historial("MATMSG:TO:andresogc2011@gmail.com;SUB:Hola mundo;BODY:Saludos Andres;;");
      return;
    }

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('barcodedata', barcodeData);
      
      if(barcodeData.cancelled == false && barcodeData.text != null ){
        this._historialService.agregar_historial(barcodeData.text);
        
      }


     }).catch(err => {
         console.log('Error', err);
         this.mostrar_error("Error "+ err);
     });

      
     
  }

  async mostrar_error( message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500
    });
    toast.present();
  }  
  

}
