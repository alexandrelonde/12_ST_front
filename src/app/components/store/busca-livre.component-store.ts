import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, switchMap } from "rxjs";
import { Restaurante } from "src/app/Interfaces/Restaurante";
import { RestaurantesService } from "src/app/services/restaurantes.service";


interface State {
  restaurantes:Restaurante[]
}

export const initialState:State={
  restaurantes:[]
}

@Injectable()
export class BuscaLivreComponentStore extends ComponentStore<State> {

  constructor(private readonly restauranteService: RestaurantesService ) {
    super(initialState);
  }


  private readonly restaurantes$ = this.select(
    (state) => state.restaurantes
  );

  readonly vm$ = this.select(
    this.restaurantes$,
    (restaurantes) => ({
      restaurantes
    })
  );

  getRestaurantes = this.effect((void$: Observable<void>) =>
    void$.pipe(
      switchMap(() =>
        this.restauranteService.getRestaurantes().pipe(
          tapResponse(
            (result) => {
              this.patchState({
                restaurantes: result,
              });
            },
            (error: HttpErrorResponse) => this.handleError(error)
          )
        )
      )
    )
  );
  getRestaurantesbyTerm = this.effect((restaurantTerm$: Observable<string>) =>
  restaurantTerm$.pipe(
    switchMap((restaurante) =>
      this.restauranteService.getRestaurantesByTerm(restaurante).pipe(
        tapResponse(
          (result) => {
            this.patchState({
              restaurantes: result,
            });
          },
          (error: HttpErrorResponse) => this.handleError(error)
        )
      )
    )
  )
);


  handleError(error: HttpErrorResponse) {
    console.log(error.message);
  }


}
