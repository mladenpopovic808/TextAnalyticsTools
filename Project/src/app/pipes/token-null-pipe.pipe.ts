import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokenNullPipe'
})
export class TokenNullPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value === null ){
      return "null"
    }
    return value
  }

}
