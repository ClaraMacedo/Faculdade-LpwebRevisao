import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {Vingador} from '../vingador';

@Component({
  selector: 'app-formulario-de-herois',
  templateUrl: './formulario-de-herois.component.html',
  styleUrls: ['./formulario-de-herois.component.css']
})
export class FormularioDeHeroisComponent implements OnInit {
  @Input()
  novo: Vingador;

  @Input()
  lista: Array<Vingador>;

  @Output()
  onCadastrar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cadastrar(){
    this.onCadastrar.emit(this.novo);
  }


}
