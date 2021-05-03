import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { Card } from '../models/card';
import { filterCards, getCards, getError } from '../state/card.reducer';
import * as CardActions from '../state/card.actions';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  pageTitle = 'Cards';
  cardFilterString$!: Observable<string>;
  errorMessage$!: Observable<string>;

  cards$!: Observable<Card[]>;
  filteredCards$!: Observable<Card[]>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.cards$ = this.store.select(getCards);

    this.filteredCards$ = this.store.select(filterCards);

    // Do NOT subscribe here because it uses an async pipe
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(CardActions.loadCards());
  }

  filterStringChanged(newFilterString: string): void {
    this.store.dispatch(
      CardActions.setCurrentFilterString({ filterCardString: newFilterString })
    );
  }
}
