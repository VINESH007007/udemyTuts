import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'aform',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  contactMethods = [
    { id :1, name:'Email'},
    { id :2, name:'Phome'},
  ]
  log(x) {
    console.log(x);
  }

  submit(f){console.log(f);}
}
