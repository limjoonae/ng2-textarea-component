import { Injectable } from '@angular/core';

@Injectable()
export class BootstrapClassService {


  constructor() { }

  setColorTheme(colorClassPrefixInput:string, colorThemeInput: string, isOutline?: string): string {

    let colorClass = '';
    let outlineClass = '';
    let colorTheme = '';
    
    if(isOutline == 'true'){
      outlineClass = 'outline-'
    }

    if(colorThemeInput != null)
      colorClass = colorClassPrefixInput.concat(outlineClass).concat(colorThemeInput);

    return colorClass;
  }

  setSize(sizeThemeInput: string): string {
    let sizeTheme = '';
    let bootstrapClass = 'btn-';
    if(sizeThemeInput != null && sizeThemeInput != '')
      sizeTheme = bootstrapClass.concat(sizeThemeInput);
    return sizeTheme;
  }
}
