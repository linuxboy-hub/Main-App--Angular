import { Pipe, PipeTransform } from '@angular/core';
import { Country } from 'src/app/pipes/interfaces/country';

@Pipe({
  name: 'countryImage',
  pure: false,
  // se pone como pipe: false de manera que
  // se dispare el transform en cada paso del ciclo de deteccion
  // de cambios
})
export class CountryImagePipe implements PipeTransform {
  transform(country: Country): string {
    if (!country.id) {
      return 'assets/no-country.png';
    } else if (country.image) {
      return country.image;
    } else {
      const name = country.name.replace(' ', '_');
      return `assets/countries/${name}.png`;
    }
  }
}
