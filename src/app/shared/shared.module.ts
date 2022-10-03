import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MaterialModule } from '../paises/material/material.module';

@NgModule({
  declarations: [MenuComponent, ErrorPageComponent, SideMenuComponent],
  imports: [CommonModule, PrimeNgModule, MaterialModule],
  exports: [MenuComponent, ErrorPageComponent, SideMenuComponent],
})
export class SharedModule {}
