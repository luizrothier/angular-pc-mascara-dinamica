import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtributoComponent } from './atributo/atributo.component';
import { EmpreendimentoComAtributoNumericoComponent } from 
'./empreendimento-com-atributo-numerico/empreendimento-com-atributo-numerico.component'
;
import { EmpreendimentoComAtributoTextoComponent } from './empreendimento-com-atributo-texto/empreendimento-com-atributo-texto.component';

const routes: Routes = [
  { path: 'atributos', component: AtributoComponent },  
  { path: 'empreendimento-com-atributo-numerico', component: EmpreendimentoComAtributoNumericoComponent },
  { path: 'empreendimento-com-atributo-texto', component: EmpreendimentoComAtributoTextoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }