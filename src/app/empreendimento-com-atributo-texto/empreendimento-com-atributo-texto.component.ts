import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-empreendimento-com-atributo-texto',
  templateUrl: './empreendimento-com-atributo-texto.component.html',
  styleUrls: ['./empreendimento-com-atributo-texto.component.css']
})
export class EmpreendimentoComAtributoTextoComponent implements OnInit {
  formEmpreendimentoComAtributoTexto: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formEmpreendimentoComAtributoTexto = this.formBuilder.group({
      nomeAtributoTexto: ['']
    });
  }

  onSubmit() {
    this.submitted = true;

    // Testar se o formulário é válido
    if (this.formEmpreendimentoComAtributoTexto.invalid) {
      return;
    }

    alert('Atributo Texto incluído com sucesso!');
  }

  onReset() {
    this.submitted = false;
    this.formEmpreendimentoComAtributoTexto.reset();
  }
}