import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizer'
})
export class SanitizerPipe implements PipeTransform {

  constructor(private saniziter: DomSanitizer) {}

  transform(value: any, args?: any): any {
    return this.saniziter.bypassSecurityTrustResourceUrl(value)
  }

}
