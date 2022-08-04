import { AddFormComponent } from './add-form/add-form.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormComponent } from './form/form.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginPageComponent },

  {
    path: 'dash',
    component: HeaderComponent,
      children: [
        { path: '', component: FormComponent },
        { path: 'form', component: FormComponent },
        { path: 'create', component: AddFormComponent },
      ],
  },

  // { path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
