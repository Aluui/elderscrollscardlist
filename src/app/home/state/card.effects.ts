import { Injectable } from '@angular/core';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CardActions from './card.actions';
import { CardService } from '../services/card.service';

@Injectable()
export class CardEffects {
  constructor(private actions$: Actions, private cardService: CardService) {}

  loadCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CardActions.loadCards),
      mergeMap(() =>
        this.cardService.getCards().pipe(
          map((cards) => CardActions.loadCardsSuccess({ cards })),
          catchError((error) => of(CardActions.loadCardsFailure({ error })))
        )
      )
    );
  });
}
