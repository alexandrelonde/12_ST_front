import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, switchMap } from "rxjs";
import { Restaurante } from "src/app/Interfaces/Restaurante";
import { RestaurantesService } from "src/app/services/restaurantes.service";


interface State {
  restaurante:Restaurante | null
}

export const initialState:State={
  restaurante:null
}

@Injectable()
export class DetalhesRestauranteComponentStore extends ComponentStore<State> {

  constructor(private readonly restauranteService: RestaurantesService ) {
    super(initialState);
  }


  private readonly restaurante$ = this.select(
    (state) => state.restaurante
  );

  readonly vm$ = this.select(
    this.restaurante$,
    (restaurante) => ({
      restaurante
    })
  );


  getRestaurante = this.effect((restauranteId$: Observable<number>) =>
  restauranteId$.pipe(
    switchMap((restauranteId) =>
      this.restauranteService.getRestaurantesPratos(restauranteId).pipe(
        tapResponse(
          (result) => {
            this.patchState({
              restaurante: result,
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
