import { Component, OnInit } from '@angular/core';
/* import {   } from "../index.paginas"; */
import { GuardadosPage } from '../guardados/guardados.page';
import { HomePage } from '../home/home.page';
import { MapaPage } from '../mapa/mapa.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

  tab1:any = HomePage;
  tab2:any = MapaPage;
  tab3:any = GuardadosPage;
  
  constructor() { }

  
}
