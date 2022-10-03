import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './switches/switches.component';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/paises/material/material.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

@NgModule({
  declarations: [SwitchesComponent, BasicosComponent, DinamicosComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    PrimeNgModule,
  ],
})
export class TemplateModule {}
