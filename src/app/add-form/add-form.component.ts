import { multiChoiceOptions } from './../Model/models';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  formInfo: FormGroup = new FormGroup({
    title: new FormControl('', []),
    description: new FormControl('', []),
  });

  // questionForm: FormGroup = new FormGroup({
  //   quesTitle: new FormControl("",[])
  // });

  quesTitle: string | null = null;

  quesTypes: string[] = [
    'Multiple Choice',
    'Linear Scale',
    'Checkbox',
    'Short Text',
    'File Upload',
  ];

  optionList: string[] = [];

  multiChoiceQues: multiChoiceOptions[] = [];

  quesTypeName: string = 'Checkbox';

  constructor() {}

  ngOnInit(): void {
    this.optionList.push('');
  }

  setQuesTitle(event: any) {
    this.quesTitle = event.target.value;
    // console.log(event.target.value);
  }

  onTapAddbtn() {
    this.optionList.push('');

    // console.log(this.formInfo.value);
    // console.log(this.quesTypeName);
    // console.log(this.quesTitle);
    // console.log(this.optionList);
  }

  temp: string | null = '';

  idxPos(val: number, event: any) {
    this.optionList[val] = event.target.value;

    console.log(this.optionList);
  }

  display() {
    console.log(this.quesTypeName);
    // console.log(this.formInfo);
    // console.log(this.quesTypes);
  }

  setQuesType(event: any) {
    // console.log(event);

    this.quesTypeName = event; //JSON.stringify(event);

    console.log(this.quesTypeName);
  }

  dltFromOptions(keyvalue: number) {
    console.log(this.optionList[keyvalue]);
    this.optionList.splice(keyvalue, 1);
  }

  saveForm() {
    this.multiChoiceQues.push({
      title: this.formInfo.value,
      quesType: this.quesTypeName,
      ques: this.quesTitle,
      options: this.optionList,
    });
    // console.log(this.quesTitle);
    console.log(this.multiChoiceQues);
  }
}
