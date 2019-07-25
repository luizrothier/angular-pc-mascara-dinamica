import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-empreendimento-com-atributo-numerico',
  templateUrl: './empreendimento-com-atributo-numerico.component.html',
  styleUrls: ['./empreendimento-com-atributo-numerico.component.css']
})
export class EmpreendimentoComAtributoNumericoComponent implements OnInit {
  formEmpreendimentoComAtributoNumerico: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formEmpreendimentoComAtributoNumerico = this.formBuilder.group({
      nomeAtributoNumerico: 0
    });
  }

  onSubmit() {
    this.submitted = true;

    // Testar se o formulário é válido
    if (this.formEmpreendimentoComAtributoNumerico.invalid) {
      return;
    }

    alert('Atributo Numérico incluído com sucesso!');
  }

  onReset() {
    this.submitted = false;
    this.formEmpreendimentoComAtributoNumerico.reset();
  }
}