import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BuscaLivreComponent } from './components/busca-livre/busca-livre.component';
import { DetalhesRestauranteComponent } from './components/detalhes-restaurante/detalhes-restaurante.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';



const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'login', component: LoginComponent },

  {
    path: 'buscar',
    component: BuscaLivreComponent,
    canActivate: [IsAuthenticatedGuard]
  },

  {
    path: 'restaurante/:id/pratos',
    component: DetalhesRestauranteComponent,
    canActivate: [IsAuthenticatedGuard]
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
