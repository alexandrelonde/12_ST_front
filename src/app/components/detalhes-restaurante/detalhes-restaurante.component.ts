import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurante } from 'src/app/Interfaces/Restaurante';
import { RestaurantesService } from 'src/app/services/restaurantes.service';

@Component({
  selector: 'app-detalhes-restaurante',
  templateUrl: './detalhes-restaurante.component.html',
  styleUrls: ['./detalhes-restaurante.component.css']
})
export class DetalhesRestauranteComponent implements OnInit{
  constructor(private restauranteService: RestaurantesService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurante$=this.restauranteService.getRestaurantesPratos(id);
  }

  restaurante$:Observable<Restaurante>=new Observable<Restaurante>;


}
