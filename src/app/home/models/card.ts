import { Set } from './set';

export interface Card {
  name: string;
  rarity: string;
  type: string;
  subtypes: string[];
  cost: number;
  power: number;
  health: number;
  set: Set;
  soulSummon: number;
  soulTrap: number;
  text: number;
  attributes: string[];
  keywords: string[];
  unique: boolean;
  imageUrl: number;
  id: number;
}
