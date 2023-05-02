import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BuscaLivreComponent } from './components/busca-livre/busca-livre.component';
import { DetalhesRestauranteComponent } from './components/detalhes-restaurante/detalhes-restaurante.component';
import { TitleLogoutComponent } from './components/title-logout/title-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuscaLivreComponent,
    DetalhesRestauranteComponent,
    TitleLogoutComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
