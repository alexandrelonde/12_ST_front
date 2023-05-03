import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BuscaLivreComponent } from './components/busca-livre/busca-livre.component';
import { DetalhesRestauranteComponent } from './components/detalhes-restaurante/detalhes-restaurante.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'buscar', component: BuscaLivreComponent},
  {path:'restaurante/:id/pratos',component:DetalhesRestauranteComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
