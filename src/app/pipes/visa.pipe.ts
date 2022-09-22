import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visa',
})
export class VisaPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Requiere VISA' : 'NO requiere VISA';
  }
}
