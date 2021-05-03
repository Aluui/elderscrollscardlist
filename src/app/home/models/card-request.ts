import { Card } from './card';
import { Links } from './link';

export interface CardRequest {
  _totalCount?: number;
  _pageSize?: number;
  _links?: Links;
  cards: Card[];
}
