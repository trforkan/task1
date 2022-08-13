import { DataSource } from '@angular/cdk/collections';
import { FormGroup, FormControl } from '@angular/forms';
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
  dataSources = [
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


  searchItem = new FormGroup({
    searchItemName: new FormControl("",[])
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitbtn() {
    this.router.navigateByUrl("/dash/create");
  }

  isSearch: boolean = false;
  filteredList: any = [];

  search(event: any) {
    console.log(event.target.value);

    if(event.target.value.length>0){
      this.isSearch=true;
    }
    else if(event.target.value===""){
      this.isSearch=false;
    }

    

    for(let a=0; a<this.dataSources.length;a++){
      // console.log(this.dataSource[a]);
      if(this.dataSources[a].name==event.target.value){
        this.filteredList.push(this.dataSources[a]);
      }
    }
    console.log(this.filteredList);
  }

}
