import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/paises/services/countries.service';
import { Country } from 'src/app/pipes/interfaces/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}
  country!: Country;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.countriesService.getCountry(id).subscribe((country: Country) => {
        this.country = country;
        console.table(this.country);
      });
    });
  }
}
