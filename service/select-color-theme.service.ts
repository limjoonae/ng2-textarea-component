import { Injectable } from '@angular/core';

@Injectable()
export class SelectColorThemeService {

  private _colorTheme = '';

  getColorTheme(_colorClassPrefixInput:string, colorThemeInput: string, isOutline?: string): string {

    let outlineClass = '';
    let _colorThemeInput = '';
    
    if(isOutline == 'true'){
      outlineClass = 'outline-'
    }

    if(colorThemeInput != null) {
      _colorThemeInput = outlineClass.concat(colorThemeInput);
      return _colorClassPrefixInput.concat(_colorThemeInput);
    }
    return this._colorTheme;
  }

}
