import { Component, OnInit } from '@angular/core';
import { LoadingController } from "@ionic/angular";
//mapas
import { GoogleMapsModule,MapInfoWindow, MapMarker } from '@angular/google-maps';

import { NavParams, ModalController  } from "@ionic/angular";

declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  
  center = {lat: 0 , lng: 0};
  mapRef= null;
  constructor(private loadCtrl:LoadingController,
              private modalCtrl:ModalController,
              private navParams:NavParams,  ) { 

  }

  async ngOnInit() {
   const loading = await this.loadCtrl.create();
   loading.present();


   let coordsArray = this.navParams.get("coords").split(",");
   this.center.lat= Number(coordsArray[0].replace("geo:", ""));
   this.center.lng= Number(coordsArray[1]);

      console.log(this.center);
      const mapEle: HTMLElement = document.getElementById('map');
      this.mapRef = new google.maps.Map(mapEle, {
        center: this.center,
        zoom:16
      });
      
      google.maps.event
      .addListenerOnce(this.mapRef, 'idle',()=>{
         loading.dismiss();
         this.addmarker();
        
      });
   
  }


  private addmarker(){
    const marker = new google.maps.Marker({
      position:{
        lat: this.center.lat,
        lng: this.center.lng 
      },
      map: this.mapRef,
      title:'Ello world'
   });
  }




  cerrar_modal(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });

  }
  

}
