import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss'],
})
export class OrdenarComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  orderBy: string = '';

  changeOrder(value: string) {
    this.orderBy = value;
  }

  countries: Country[] = [
    {
      id: 0,
      name: 'switzerland',
      capital: 'berna',
      population: 8636896,
      currency: 'Swiss franc (CHF)',
      continent: 'europe',
      visa: false,
      link: 'https://en.wikipedia.org/wiki/Switzerland',
    },
    {
      id: 1,
      name: 'faroe islands',
      capital: 'Tórshavn',
      population: 54000,
      currency: 'Faroese króna (DKK)',
      continent: 'europe',
      visa: true,
      link: 'https://en.wikipedia.org/wiki/Faroe_Islands',
    },
    {
      id: 2,
      name: 'denmark',
      capital: 'Copenhagen',
      population: 5913538,
      currency: 'Danish krone (DKK)',
      continent: 'europe',
      visa: true,
      link: 'https://en.wikipedia.org/wiki/Denmark',
    },
    {
      id: 3,
      name: 'norway',
      capital: 'oslo',
      population: 5425270,
      currency: 'Norwegian krone (NOK)',
      continent: 'europe',
      visa: true,
      link: 'https://en.wikipedia.org/wiki/Norway',
    },
  ];
}
