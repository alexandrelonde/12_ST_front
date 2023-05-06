import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from '../Interfaces/Restaurante';
import { enviroment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor(private http: HttpClient) { }


  getRestaurantes():Observable<Restaurante[]>{
    return this.http.get<Restaurante[]>(enviroment.apiUrl+'/restaurante/listar');
  }

  getRestaurantesPratos(id: number): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${enviroment.apiUrl}/restaurante/${id}/pratos`);
  }

  getRestaurantesByTerm(term:string):Observable<Restaurante[]>{

    let params=new HttpParams()
    if(term)
    {
      params=params.set('term',term);
    }

    return this.http.get<Restaurante[]>(enviroment.apiUrl+'/restaurante/busca',{
      params
    });
  }

}
