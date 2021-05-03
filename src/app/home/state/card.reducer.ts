/* NgRx */
import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as CardActions from './card.actions';
import * as AppState from '../../state/app.state';
import { Card } from '../models/card';
import { CardRequest } from '../models/card-request';

// Extends the app state to include the card feature.
// This is required because cards are lazy loaded.
// So the reference to CardState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
  cards: CardState;
}

// State for this feature (Card)
export interface CardState {
  filterCardString: string;
  cardsRequest: CardRequest;
  error: string;
}

const initialState: CardState = {
  filterCardString: '',
  cardsRequest: { cards: [] },
  error: '',
};

// Selector functions
const getCardFeatureState = createFeatureSelector<CardState>('cards');

// export const getShowCardCode = createSelector(
//   getCardFeatureState,
//   state => state.showCardCode
// );

// export const getCurrentCard = createSelector(
//   getCardFeatureState,
//   state => state.currentCard
// );

export const getFilterString = createSelector(
  getCardFeatureState,
  (state) => state.filterCardString
);

export const getCardRequest = createSelector(
  getCardFeatureState,
  (state) => state.cardsRequest
);

// export const getCards = createSelector(
//   getCardFeatureState,
//   (state) => state.cards
// );

export const filterCards = createSelector(getCardFeatureState, (state) =>
  state.cardsRequest.cards.filter((c) =>
    c.name.toLowerCase().includes(state.filterCardString.toLowerCase())
  )
);

export const getError = createSelector(
  getCardFeatureState,
  (state) => state.error
);

export const cardReducer = createReducer<CardState>(
  initialState,
  on(
    CardActions.setCurrentFilterString,
    (state, action): CardState => {
      return {
        ...state,
        filterCardString: action.filterCardString,
      };
    }
  ),
  on(
    CardActions.loadCardsSuccess,
    (state, action): CardState => {
      return {
        ...state,
        cardsRequest: action.cardsRequest,
        error: '',
      };
    }
  ),
  on(
    CardActions.loadCardsFailure,
    (state, action): CardState => {
      return {
        ...state,
        cardsRequest: { cards: [] },
        error: action.error,
      };
    }
  )
);
