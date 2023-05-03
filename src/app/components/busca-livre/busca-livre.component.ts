import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurante } from 'src/app/Interfaces/Restaurante';
import { RestaurantesService } from 'src/app/services/restaurantes.service';

@Component({
  selector: 'app-busca-livre',
  templateUrl: './busca-livre.component.html',
  styleUrls: ['./busca-livre.component.css'],
})
export class BuscaLivreComponent implements OnInit {

  restaurantes$: Observable<Restaurante[]> = new Observable<Restaurante[]>();

  constructor(private restauranteService: RestaurantesService,private router:Router) {}

  ngOnInit(): void {
    this.restaurantes$=this.restauranteService.getRestaurantes();
  }


  irPraDetalhes(restauranteId: number) {
      this.router.navigateByUrl(`/restaurante/${restauranteId}/pratos`);
    }


}
