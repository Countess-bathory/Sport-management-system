import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch: string): any {
  
    var res = "";
    for (var i =ch.length - 1; i >= 0; i--) {
      res = res + ch[i];
    }
    return res;
 
  }

}
