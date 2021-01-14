import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { micomponente } from './components/micomponente/micomponente.component';
import { MisegundocomponentComponent } from './misegundocomponent/misegundocomponent.component';
import { MitercercomponenteComponent } from './components/mitercercomponente/mitercercomponente.component'
@NgModule({
  declarations: [
    AppComponent,
    micomponente,
    MisegundocomponentComponent,
    MitercercomponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
