import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  items!: MenuItem[];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular pipes',
        items: [
          {
            label: 'Básicos',
            routerLink: ['basicos'],
          },
          {
            label: 'No comunes',
            routerLink: ['no-comunes'],
          },
          {
            label: 'Números',
            routerLink: ['numeros'],
          },
          {
            label: 'Ordenar',
            routerLink: ['ordenar'],
          },
        ],
      },
      {
        label: 'Back home',
        icon: 'pi pi-home',
        routerLink: [''],
      },
    ];
  }
}
