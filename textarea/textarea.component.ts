import { Component, OnInit, Input } from '@angular/core';
import { SelectColorThemeService } from '../service/select-color-theme.service';

@Component({
  selector: 'gos-textarea',
  templateUrl: './textarea.component.html',
  styles: [],
  providers: [ SelectColorThemeService ] 
})
export class TextareaComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() row: string;
  rowReturn: string;
  @Input() require: string;
  @Input() disable: string;
  @Input() readonly: string;
  @Input() maxlength: string;
  @Input() defaultValue: string;
  @Input() colorTheme: string;
  private colorClass: string;
  private _colorClassPrefix = 'alert alert-';

  constructor(private _selectColorThemeService: SelectColorThemeService) { }

  ngOnInit() {
    this.colorClass = this._selectColorThemeService.getColorTheme(this._colorClassPrefix, this.colorTheme);
    this.rowReturn = this.returnRow(this.row);
}

  returnRow(rowInput: string): string {
    if(rowInput == null || rowInput == '')
      return '2';
    return rowInput;
  }


}
