import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
// import { MatForm}


const Material = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule
];


@NgModule({
  imports: [
    Material
  ],
  exports: [
    Material
  ]
})
export class MaterialsModule { }
