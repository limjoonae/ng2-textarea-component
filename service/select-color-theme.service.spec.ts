/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectColorThemeService } from './select-color-theme.service';

describe('Service: SelectColorTheme', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectColorThemeService]
    });
  });

  it('should create', inject([SelectColorThemeService], (service: SelectColorThemeService) => {
    expect(service).toBeTruthy();
  }));

  it(`should return 'alert alert-success' if colorClassPrefix is 'alert alert-' and colorClass is 'success' `, inject([SelectColorThemeService], (service: SelectColorThemeService) => {
    let colorClassPrefix = 'alert alert-';
    let colorClass = 'success';
    expect(service.getColorTheme(colorClassPrefix, colorClass)).toEqual(colorClassPrefix.concat(colorClass));
  }));

  it(`should return 'button-outline-warning' if colorClassPrefix is 'button-', colorClass is 'warning' and isOutlineColor equal 'true'`, inject([SelectColorThemeService], (service: SelectColorThemeService) => {
    let colorClassPrefix = 'button-';
    let colorClass = 'warning';
    let isOutlineColor = 'true';
    expect(service.getColorTheme(colorClassPrefix, colorClass, isOutlineColor)).toEqual('button-outline-warning');
  }));
});
