import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './interfaces/country';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(countries: Country[], orderBy: string = ''): Country[] {
    switch (orderBy) {
      case 'name':
        countries = countries.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        );
        break;

      case 'population':
        countries = countries.sort((a, b) =>
          a.population > b.population ? 1 : -1
        );
        break;

      case 'capital':
        countries = countries.sort(function (a, b) {
          if (a.capital.toLowerCase() > b.capital.toLowerCase()) {
            return 1;
          }
          if (a.capital.toLowerCase() < b.capital.toLowerCase()) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        // Si quisiera que fuese descendente cambio ? -1 : 1
        break;

      case 'visa':
        countries = countries.sort((a, b) => (a.visa > b.visa ? 1 : -1));
        break;

      default:
        break;
    }

    return countries;
  }
}
