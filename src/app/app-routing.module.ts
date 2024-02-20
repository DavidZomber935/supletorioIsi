import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ServiciosComponent } from './screens/servicios/servicios.component';
import { ContactosComponent } from './screens/contactos/contactos.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
