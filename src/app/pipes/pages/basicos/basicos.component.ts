import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss'],
})
export class BasicosComponent implements OnInit {
  nombreLower: string = 'mateo jaramillo';
  nombreUpper: string = 'MATEO JARAMILLO';
  nombreMix: string = 'MatEo jARamiLlO';

  fecha: Date = new Date(); // Fecha del día

  constructor() {}

  ngOnInit(): void {}
}
