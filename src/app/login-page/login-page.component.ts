import { FormControl, FormGroup } from '@angular/forms';
import { login } from './../Model/models';
import { Component, OnInit } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  loginInfo: login[] = [];

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl("",[]),
    password: new FormControl("",[])
  });

  hide = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitbtn() {
    this.loginInfo = this.loginForm.value;
    // console.log(this.loginForm.value);
    console.log(this.loginInfo);
    this.router.navigateByUrl('/dash');
  }

}
