import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/paises/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BasicosComponent, DinamicosComponent, SwitchesComponent],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ],
})
export class ReactiveModule {}
