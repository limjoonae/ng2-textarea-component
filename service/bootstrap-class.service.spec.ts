/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BootstrapClassService } from './bootstrap-class.service';

describe('Service: BootstrapClass', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BootstrapClassService]
    });
  });

  it('should create', inject([BootstrapClassService], (service: BootstrapClassService) => {
    expect(service).toBeTruthy();
  }));
});

describe('Service: BootstrapClass => setColorTheme', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BootstrapClassService]
    });
  });

  it(`should create`, inject([BootstrapClassService], (service: BootstrapClassService) => {
    expect(service).toBeTruthy();
  }));

  it(`should return 'alert alert-success' if colorClassPrefix is 'alert alert-' and colorClass is 'success' `, inject([BootstrapClassService], (service: BootstrapClassService) => {
    let colorClassPrefix = 'alert alert-';
    let colorClass = 'success';
    expect(service.setColorTheme(colorClassPrefix, colorClass)).toEqual(colorClassPrefix.concat(colorClass));
  }));

  it(`should return 'button-outline-warning' if colorClassPrefix is 'button-', colorClass is 'warning' and isOutlineColor equal 'true'`, inject([BootstrapClassService], (service: BootstrapClassService) => {
    let colorClassPrefix = 'button-';
    let colorClass = 'warning';
    let isOutlineColor = 'true';
    expect(service.setColorTheme(colorClassPrefix, colorClass, isOutlineColor)).toEqual('button-outline-warning');
  }));
});
