import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss'],
})
export class NoComunesComponent implements OnInit {
  nombre: string = 'mateo jaramillo';
  genero: string = 'M';
  invitacionMap = {
    M: 'invitarlo',
    F: 'invitarla',
  };

  names = [
    'Lucy',
    'Tomas',
    'Mateo',
    'Juan Carlos',
    'Ana María',
    'Johan Mauricio',
    'Gloria María',
    'Luis Carlos',
    'Lilian Vargas',
    'Alicica Ramirez',
  ];
  genders = ['F', 'M', 'M', 'M', 'F', 'M', 'F', 'M', 'F', 'F'];

  clientes: string[] = ['Maria', 'Pedro', 'Jose'];
  clientesMap = {
    '=0': 'no tenemos nigún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  person = {
    name: 'Mateo',
    lastname: 'Jaramillo',
    profession: 'Electronic Engineer',
    age: 25,
    nationality: 'CO',
  };

  myObservable = interval(1750); //Observable que emite valores numericos

  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise resolved');
      resolve('Fin de la promesa, ya hay data del back');
    }, 3500);
  });

  constructor() {}

  ngOnInit(): void {}

  addClient() {
    const nameIndex = Math.floor(Math.random() * this.names.length);
    this.clientes.push(this.names[nameIndex]);
  }
  removeClient() {
    this.clientes.pop();
  }
  changeInvited() {
    const nameIndex = Math.floor(Math.random() * this.names.length);
    this.nombre = this.names[nameIndex];
    this.genero = this.genders[nameIndex];
  }
}
