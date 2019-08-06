import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarMercanciaComponent } from './components/mostrar-mercancia/mostrar-mercancia.component';
import { VerDetallesComponent } from './detalles/ver-detalles/ver-detalles.component';


@NgModule({
  declarations: [
    AppComponent,
    MostrarMercanciaComponent,
    VerDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
