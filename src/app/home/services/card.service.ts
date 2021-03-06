import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Card } from '../models/card';
import { environment } from 'src/environments/environment';
import { CardRequest } from '../models/card-request';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private cardsUrl = `${environment.apiUrl}/cards`;

  constructor(private http: HttpClient) {}

  getCards(): Observable<CardRequest> {
    return this.http.get<CardRequest>(this.cardsUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      // map((data) => data.cards as Card[]),
      catchError(this.handleError)
    );
  }

  getPreviousCardBatch(previousUrlString: string): Observable<CardRequest> {
    return this.http.get<CardRequest>(previousUrlString).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      // map((data) => data.cards as Card[]),
      catchError(this.handleError)
    );
  }

  getNextCardBatch(nextUrlString: string): Observable<CardRequest> {
    return this.http.get<CardRequest>(nextUrlString).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      // map((data) => data.cards as Card[]),
      catchError(this.handleError)
    );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
