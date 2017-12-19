import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-temp',
  templateUrl: './new-temp.component.html',
  styleUrls: ['./new-temp.component.css']
})
export class NewTempComponent  {
  form = new FormGroup({
    name : new FormControl(),
    topics: new FormArray([]),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
  });

  constructor(fb: FormBuilder ){
    
  }
  addTopic(topic:HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value ='';
  }

  removeTopic(topic: FormControl) {
    this.topics.removeAt(this.topics.controls.indexOf(topic));
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
