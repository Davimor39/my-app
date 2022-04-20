import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { SecondComponent } from './second/second.component';
import { DefectoComponent } from './defecto/defecto.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    SecondComponent,
    DefectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
