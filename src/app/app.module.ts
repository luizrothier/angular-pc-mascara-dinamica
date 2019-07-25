import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { AtributoComponent } from './atributo/atributo.component';
import { EmpreendimentoComAtributoNumericoComponent } from './empreendimento-com-atributo-numerico/empreendimento-com-atributo-numerico.component';
import { EmpreendimentoComAtributoTextoComponent } from './empreendimento-com-atributo-texto/empreendimento-com-atributo-texto.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule, 
    // AppRoutingModule 
    ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    AtributoComponent,
    // HomeComponent,
    EmpreendimentoComAtributoNumericoComponent,
    EmpreendimentoComAtributoTextoComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
