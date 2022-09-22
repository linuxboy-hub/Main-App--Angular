import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { CountryComponent } from './pages/country/country.component';
import { ListComponent } from './pages/list/list.component';
import { PaisesHomeComponent } from './pages/paises-home/paises-home.component';
import { PaisesRoutingModule } from './paises-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountryImagePipe } from './pipes/country-image.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';

@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    CountryComponent,
    ListComponent,
    PaisesHomeComponent,
    CountryCardComponent,
    CountryImagePipe,
    ConfirmDeleteComponent,
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule, //Para activar el ngModel
  ],
})
export class PaisesModule {}
