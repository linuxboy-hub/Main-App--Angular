import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './paises/auth/guards/auth.guard';
import { BasicosComponent } from './pipes/pages/basicos/basicos.component';
import { NoComunesComponent } from './pipes/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pipes/pages/numeros/numeros.component';
import { OrdenarComponent } from './pipes/pages/ordenar/ordenar.component';
import { PipesComponent } from './pipes/pages/pipes/pipes.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'store', component: StoreComponent },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./pipes/pipes.module').then((m) => m.PipesModule),
  },
  {
    path: 'paises',
    loadChildren: () =>
      import('./paises/paises/paises.module').then((m) => m.PaisesModule),
    canLoad: [AuthGuard], //se usa este para el lazy loading
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./paises/auth/auth.module').then((m) => m.AuthModule), //Esta es la clave del lazy load, ya que carga
    //los hijos solo cuando se entra a esta ruta
  },
  { path: '**', redirectTo: '404' },
  { path: '404', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
