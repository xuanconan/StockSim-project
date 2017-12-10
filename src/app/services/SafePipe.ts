


import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {

  constructor(private santinizer: DomSanitizer) {}

  transform(url) {
    return this.santinizer.bypassSecurityTrustResourceUrl(url);
  }
}
