import { createAction, props } from '@ngrx/store';
import { Card } from '../models/card';

export const loadCards = createAction('[Card] Load');

export const loadCardsSuccess = createAction(
  '[Card] Load Success',
  props<{ cards: Card[] }>()
);

export const loadCardsFailure = createAction(
  '[Card] Load Fail',
  props<{ error: string }>()
);

export const setCurrentFilterString = createAction(
  '[Cards] Filter the cards',
  props<{ filterCardString: string }>()
);
