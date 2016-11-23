import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective  } from './directive/index';
import { LabelComponent } from './label/index';
import { TextareaComponent } from './textarea/index';
import { TextboxComponent } from './textbox/index';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDisabledDirective,
    CustomReadonlyDirective,
    CustomMaxlengthDirective,
    LabelComponent,
    TextareaComponent,
    TextboxComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
