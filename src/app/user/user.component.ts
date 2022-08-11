import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  selected = "A";

  nameTitles: string[] = [
    "Mr",
    "Mrs",
    "Miss",
    "Dr",
    "Prof"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
