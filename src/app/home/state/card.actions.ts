import { createAction, props } from '@ngrx/store';
import { Card } from '../models/card';
import { CardRequest } from '../models/card-request';

export const loadCards = createAction('[Card] Load');

export const loadCardsSuccess = createAction(
  '[Card] Load Success',
  props<{ cardsRequest: CardRequest }>()
);

export const loadCardsFailure = createAction(
  '[Card] Load Fail',
  props<{ error: string }>()
);

export const setCurrentFilterString = createAction(
  '[Cards] Filter the cards',
  props<{ filterCardString: string }>()
);

export const loadNextCardBatch = createAction(
  '[Cards] Load next batch',
  props<{ nextBatchUrl: string }>()
);

export const loadPreviousCardBatch = createAction(
  '[Cards] Load previous batch',
  props<{ previousBatchUrl: string }>()
);
