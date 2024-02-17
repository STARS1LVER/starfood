import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'TextDescription',
  standalone: true,
})
export class TextDescriptionPipe implements PipeTransform {

  transform(description: string): string {
    if(description.length > 100){
      let descriptionReduce = description.substring(0,50);
      return descriptionReduce+='...'
    }
    return description
  }

}
