import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  formInfo = new FormGroup({
    title: new FormControl(""),
    description: new FormControl("")
  })

  constructor() { }

  ngOnInit(): void {
  }

  display() {
    console.log(this.formInfo);
  }

}
