import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss'],
})
export class NumerosComponent implements OnInit {
  numeroDecimales: number = 930853.45221;
  numeroPorcentaje: number = 0.32;

  constructor() {}

  ngOnInit(): void {}
}
