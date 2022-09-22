import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pages/pipes/pipes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: '',
    component: PipesComponent,
    children: [
      { path: 'basicos', component: BasicosComponent, pathMatch: 'full' },
      { path: 'no-comunes', component: NoComunesComponent, pathMatch: 'full' },
      { path: 'numeros', component: NumerosComponent, pathMatch: 'full' },
      { path: 'ordenar', component: OrdenarComponent, pathMatch: 'full' },
      { path: '**', redirectTo: 'basicos' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesRoutingModule {}
