import { multiChoiceOptions } from './../Model/models';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  formInfo: FormGroup = new FormGroup({
    title: new FormControl(""),
    description: new FormControl("")
  });

  question: FormGroup = new FormGroup({
    quesTitle: new FormControl("",[])
  });


  quesTypes: string[] = [

    "Multiple Choice",
    "Linear Scale",
    "Checkbox",
    "Short Text",
    "File Upload"

  ];

  optionList: string[] = [];

  lula_forkan: FormGroup = new FormGroup({
    options: new FormArray([]),
  });

  multiChoiceQues: multiChoiceOptions[] = [];



  quesTypeName: string = "Checkbox";


  constructor() { }

  ngOnInit(): void {

    this.optionList.push("");
  }



  onTapAddbtn() {

    this.optionList.push("");
    // console.log(this.multiChoiceList);

  }

  temp: string | null = "";

  idxPos(val:number,event:any) {
    // console.log(val);
    // console.log(event.target.value);
    this.optionList[val]=event.target.value;
    // console.log(event.target.value);
    console.log(this.optionList);
    // this.temp=event.target.value;

  }



  display() {
    console.log(this.quesTypeName);
    // console.log(this.formInfo);
    // console.log(this.quesTypes);
  }

  setQuesType(event: Event) {
    // console.log(event);

    this.quesTypeName = JSON.stringify(event);

    console.log(this.quesTypeName);

  }

  dltFromOptions(keyvalue: number) {
    console.log(this.optionList[keyvalue]);
    this.optionList.splice(keyvalue,1);
  }

}
