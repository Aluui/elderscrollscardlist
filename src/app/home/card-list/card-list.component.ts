import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { Card } from '../models/card';
import {
  filterCards,
  getCardRequest,
  getError,
  getFilterString,
} from '../state/card.reducer';
import * as CardActions from '../state/card.actions';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { CardRequest } from '../models/card-request';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  pageTitle = 'Cards';
  cardFilterString$!: Observable<string>;
  cardRequest$!: Observable<CardRequest | null | undefined>;
  errorMessage$!: Observable<string>;

  @ViewChild(CdkVirtualScrollViewport)
  viewport!: CdkVirtualScrollViewport;

  theEnd = false;

  offset = new BehaviorSubject(null);

  // cards$!: Observable<Card[]>;
  filteredCards$!: Observable<Card[]>;

  constructor(private store: Store<State>) {
    // this.viewport.
  }

  ngOnInit(): void {
    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    // this.cards$ = this.store.select(getCards);

    this.cardRequest$ = this.store.select(getCardRequest);

    this.cardFilterString$ = this.store.select(getFilterString);

    this.filteredCards$ = this.store.select(filterCards);

    // Do NOT subscribe here because it uses an async pipe
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(CardActions.loadCards());
  }

  // previousBatch(e: any, offset: any){
  //   if(this.theEnd){
  //     return;
  //   }

  //   const end = this.viewport.getRenderedRange().start;
  //   const total = this.viewport.getDataLength();

  //   if(end === total){
  //     this.offset.next(offset);
  //   }
  // }

  // nextBatch(e: any, offset: any){
  //   if(this.theEnd){
  //     return;
  //   }

  //   const end = this.viewport.getRenderedRange().end;
  //   const total = this.viewport.getDataLength();

  //   if(end === total){
  //     this.offset.next(offset);
  //   }
  // }

  loadPreviousCardBatch(previousBatchUrl: any) {
    this.store.dispatch(
      CardActions.loadPreviousCardBatch({ previousBatchUrl })
    );
  }

  loadNextCardBatch(nextBatchUrl: any) {
    this.store.dispatch(CardActions.loadNextCardBatch({ nextBatchUrl }));
  }

  filterStringChanged(newFilterString: any): void {
    // console.log('newFilterString', newFilterString);

    this.store.dispatch(
      CardActions.setCurrentFilterString({ filterCardString: newFilterString })
    );
  }
}
