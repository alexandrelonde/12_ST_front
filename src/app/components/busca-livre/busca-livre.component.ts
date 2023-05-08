import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurante } from 'src/app/Interfaces/Restaurante';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { BuscaLivreComponentStore } from '../store/busca-livre.component-store';

@Component({
  selector: 'app-busca-livre',
  templateUrl: './busca-livre.component.html',
  styleUrls: ['./busca-livre.component.css'],
  providers:[BuscaLivreComponentStore]
})
export class BuscaLivreComponent implements OnInit {


  vm$ = this.buscaStore.vm$;

  searchForm=this.fb.group({
    buscar:['',Validators.required]
  })

  get buscar()
  {
    return this.searchForm.controls['buscar'];
  }

  constructor(private fb:FormBuilder,private buscaStore:BuscaLivreComponentStore,private router:Router) {}

  ngOnInit(): void {
      this.buscaStore.getRestaurantes();
  }


  submitSearch()
  {
    if(this.searchForm.valid)
    {
      this.buscaStore.getRestaurantesbyTerm(this.buscar.value ?? '');
    }

  }


  irPraDetalhes(restauranteId: number) {
      this.router.navigateByUrl(`/restaurante/${restauranteId}/pratos`);
    }


}
