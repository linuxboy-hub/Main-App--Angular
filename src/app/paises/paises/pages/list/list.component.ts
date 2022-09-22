import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/paises/services/countries.service';
import { Country } from 'src/app/pipes/interfaces/country';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  countriesData!: Country[];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService
      .getCountries()
      .subscribe((resp) => (this.countriesData = resp));
  }
}
