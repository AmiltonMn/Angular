import { Pipe, PipeTransform } from '@angular/core';

export type Languages = 'en' | 'pt';
export type Messages = 'placeholder' | 'title';

@Pipe({
  name: 'translate'
})

export class TranslatePipe implements PipeTransform {

  translations = {
    'en' : {
      'placeholder': 'Type yours new items here',
      'title': 'My TODO list'
    },
    'pt' : {
      'placeholder': 'Digite seus novos itens aqui!',
      'title': 'Minha lista de afazeres'
    }
  }

  transform(value: Messages, languages: Languages): string {
    return this.translations[languages][value];
  }

}
