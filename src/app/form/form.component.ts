import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  displayedColumns: string[] = ['name', 'created_on'];
  dataSource = [
    {name: 'Hydrogen', created_on: 'DD/MM/YYYY'},
    {name: 'Helium', created_on: 'DD/MM/YYYY'},
    {name: 'Lithium', created_on: 'DD/MM/YYYY'},
    {name: 'Beryllium', created_on: 'DD/MM/YYYY'},
    {name: 'Boron', created_on: 'DD/MM/YYYY'},
    {name: 'Carbon', created_on: 'DD/MM/YYYY'},
    {name: 'Nitrogen', created_on: 'DD/MM/YYYY'},
    {name: 'Oxygen', created_on: 'DD/MM/YYYY'},
    {name: 'Fluorine', created_on: 'DD/MM/YYYY'},
    {name: 'Neon', created_on: 'DD/MM/YYYY'},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitbtn() {
    this.router.navigateByUrl("/dash/create");
  }

}
