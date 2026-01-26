
export type RewardType = 
  | '100 Slot Free Spins' 
  | '$10 in Live Casino only' 
  | '$50 Credits' 
  | '$15 Credits';

export interface TicketTier {
  amount: number;
  tickets: number;
  bonus?: boolean;
}

export interface Weapon {
  id: string;
  name: string;
  count: number;
  max: number;
  image: string;
  icon?: string; // Optional fallback
}

export interface GameState {
  tickets: number;
  weapons: Weapon[];
  isGameOpen: boolean;
}
