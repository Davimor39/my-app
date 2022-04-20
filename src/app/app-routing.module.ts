import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefectoComponent} from './defecto/defecto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { SecondComponent} from './second/second.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: DefectoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'second', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
