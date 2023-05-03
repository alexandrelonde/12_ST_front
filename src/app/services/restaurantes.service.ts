import { HttpClient } from '@angular/common/http';
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

}
