import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'role', 'last_login', 'status'];
  dataSource = [
    {name: 'Mr X', email: 'xyz@mail.com', role:'Admin', last_login: 'DD/MM/YYYY', status: true},
    {name: 'Mr Y', email: 'pqr@mail.com', role:'Admin', last_login: 'DD/MM/YYYY', status: true},
    {name: 'Mr Z', email: 'ijk@mail.com', role:'User', last_login: 'DD/MM/YYYY', status: false},
  ];



  selected = "A";

  nameTitles: string[] = [
    "Name",
    "Email",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
