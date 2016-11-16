import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  template: '<label>{{label}}<font color="red">{{requireSign}}</font></label>',
  styles: []
})
export class LabelComponent implements OnInit {

  @Input() label: string;
  @Input() require: string;

  requireSign: string;

  constructor() { }

  ngOnInit() {
    this.requireSign = this.isRequire(this.require);
  }

  isRequire(requireInput: string) {
    let sign = " *";
    if(requireInput == "true") 
      return sign;
    return "";
  }

}
