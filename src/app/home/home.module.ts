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
import { Features } from '../state/features';
import { HomeEffects } from './effects/home.effects';
import * as fromHome from './reducers';
import { CardListComponent } from './card-list/card-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CardEffects } from './state/card.effects';

@NgModule({
  declarations: [HomeComponent, CardListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ScrollingModule,
    EffectsModule.forFeature([CardEffects]),
    StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.reducers, {
      metaReducers: fromHome.metaReducers,
    }),
  ],
})
export class HomeModule {}