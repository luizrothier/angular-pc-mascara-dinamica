import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent implements OnInit {
formAtributo: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formAtributo = this.formBuilder.group({
      nomeAtrib: [''],
      tipoAtrib: [''],
      mascaraAtrib: ['']
    });
  }

  onSubmit() {
    this.submitted = true;

    // Testar se o formulário é válido
    if (this.formAtributo.invalid) {
      return;
    }

    alert('Máscara de Atributo Numéricos incluída com sucesso!');
  }

  onReset() {
    this.submitted = false;
    this.formAtributo.reset();
  }
}