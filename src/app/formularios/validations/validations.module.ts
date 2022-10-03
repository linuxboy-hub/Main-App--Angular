import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationsRoutingModule } from './validations-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from 'src/app/paises/material/material.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    ValidationsRoutingModule,
    MaterialModule,
    PrimeNgModule,
    FlexLayoutModule,
    FormsModule,
  ],
})
export class ValidationsModule {}
