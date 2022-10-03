import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFormulariosComponent } from './home-formularios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeFormulariosComponent],
  exports: [HomeFormulariosComponent],
  imports: [CommonModule, SharedModule, RouterModule, FlexLayoutModule],
})
export class FormulariosModule {}
