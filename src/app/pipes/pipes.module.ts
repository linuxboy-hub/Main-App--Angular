import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { VisaPipe } from './visa.pipe';
import { OrdenarPipe } from './ordenar.pipe';
import { PipesRoutingModule } from './pipes-routing.module';

@NgModule({
  declarations: [
    NumerosComponent,
    BasicosComponent,
    NoComunesComponent,
    OrdenarComponent,
    PipesComponent,
    VisaPipe,
    OrdenarPipe,
  ],
  imports: [CommonModule, PipesRoutingModule, PrimeNgModule],
})
export class PipesModule {}
