import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // pageName: string | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onSubmitbtn(pageName: string) {
    // this.pageName = pageName;
    // console.log(this.pageName);
    // console.log("Hello");
    this.router.navigateByUrl(pageName);
  }

}
