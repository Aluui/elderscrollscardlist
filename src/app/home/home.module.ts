import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CardListComponent } from './card-list/card-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CardEffects } from './state/card.effects';
import { cardReducer } from './state/card.reducer';
import { SingleCardComponent } from './single-card/single-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, CardListComponent, SingleCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    ScrollingModule,
    EffectsModule.forFeature([CardEffects]),
    StoreModule.forFeature('cards', cardReducer),
  ],
})
export class HomeModule {}
