import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective } from '../directive/index';
import { TextareaComponent } from './textarea.component';
import { LabelComponent } from '../label/index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextareaComponent,
    CustomDisabledDirective, 
    CustomReadonlyDirective, 
    CustomMaxlengthDirective,
    LabelComponent
  ]
})
export class TextareaModule { }


