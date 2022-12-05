import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, limit: number, ellipsis: string = '...'): string {
    if (ellipsis.length > 3) {
      throw new Error('The length of the ellipsis can not be more than 3');
    }
    return value.length > limit ? value.substring(0, limit) + ellipsis : value;
  }
}
