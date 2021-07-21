import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ChuchesComponent } from './chuches/chuches.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { OtrosComponent } from './otros/otros.component';
import { CubiertosComponent } from './cubiertos/cubiertos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UsuarioAgregadoComponent } from './usuario-agregado/usuario-agregado.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireStorageModule } from '@angular/fire/storage';

import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    
   
    ChuchesComponent,
    BebidasComponent,
    OtrosComponent,
    CubiertosComponent,
    ContactoComponent,
    UsuarioAgregadoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
