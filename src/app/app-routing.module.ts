import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerDetallesComponent } from './detalles/ver-detalles/ver-detalles.component';


const routes: Routes = [
  {path:'ver-detalle', component:VerDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
