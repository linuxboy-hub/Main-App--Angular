import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { CountriesService } from 'src/app/paises/services/countries.service';
import { Country } from 'src/app/pipes/interfaces/country';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  countries!: Country[];
  country: Country | undefined;
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = [];
  }

  searching(e: Event) {
    this.countriesService
      .getCountryByName(this.searchTerm.trim())
      .subscribe((countries: Country[]) => (this.countries = countries));
  }

  optionSelected(e: MatAutocompleteSelectedEvent) {
    if (!e.option.value) {
      this.country = undefined;
      return;
    }
    this.country = e.option.value;
    this.searchTerm = e.option.value.name;
  }
}
