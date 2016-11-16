import { Injectable } from '@angular/core';

@Injectable()
export class SelectColorThemeService {

  private _colorTheme = "";

  getColorTheme(_colorClassPrefixInput:string, colorThemeInput: string): string {
    if(colorThemeInput != null)
      return _colorClassPrefixInput.concat(colorThemeInput);
    return this._colorTheme;
  }

}
