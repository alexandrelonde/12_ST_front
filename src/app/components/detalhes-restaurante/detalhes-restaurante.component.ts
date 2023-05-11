import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurante } from 'src/app/Interfaces/Restaurante';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { DetalhesRestauranteComponentStore } from '../store/detalhes-restaurante.component-store';

@Component({
  selector: 'app-detalhes-restaurante',
  templateUrl: './detalhes-restaurante.component.html',
  styleUrls: ['./detalhes-restaurante.component.css'],
  providers:[DetalhesRestauranteComponentStore]
})
export class DetalhesRestauranteComponent implements OnInit{

  vm$ = this.detalhesRestauranteComponentStore.vm$;
  constructor(private detalhesRestauranteComponentStore:DetalhesRestauranteComponentStore, private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.detalhesRestauranteComponentStore.getRestaurante(id);
  }

  IrpraTeladeBuscar()
  {
    console.log("tes");
    this.router.navigateByUrl(`/buscar`);
  }

}
