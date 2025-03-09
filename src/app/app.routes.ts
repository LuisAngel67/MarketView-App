import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
import { EmpresaComponent } from './components/empresa/empresa.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'empresa/:symbol', component: EmpresaComponent }
];