import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.scss']
})
export class LoginPortalComponent implements OnInit {

  hide = true;
  // loginForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   console.log()
  // }

}
