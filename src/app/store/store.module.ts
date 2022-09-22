import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [StoreComponent, CardComponent],
  exports: [StoreComponent],
  imports: [CommonModule, PrimeNgModule, SharedModule],
})
export class StoreModule {}
