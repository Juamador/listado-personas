import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: string,): string {
    let output = value;
    if(output == '')
      output = '/assets/images/SinFoto.jpg';
    return output;
  }

}
