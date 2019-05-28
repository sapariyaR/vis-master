import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'localeNumber'
})

export class LocaleNumberPipe implements PipeTransform {
  transform(value: number, maximumFractionDigits: number, locale = 'en-IN'): string {
    return new Intl.NumberFormat(locale, {maximumFractionDigits}).format(value);
  }
}
