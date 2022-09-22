import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [HomeComponent, ModalComponent],
  imports: [CommonModule, RouterModule, PrimeNgModule],
  exports: [HomeComponent],
})
export class HomeModule {}
