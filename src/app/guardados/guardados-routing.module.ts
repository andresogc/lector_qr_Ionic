import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardadosPage } from './guardados.page';

const routes: Routes = [
  {
    path: '',
    component: GuardadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardadosPageRoutingModule {}
