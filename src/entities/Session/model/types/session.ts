import { UUID } from 'crypto';
import { User } from 'entities/User';

export interface GameSettings {
  dealerGamer: boolean;
  autoJoinToGame: boolean;
  autoOpeningCards: boolean;
  changeChoiceAfterRoundEnd: boolean;
  timeout?: number;
  cards?: string;
}

export interface Session {
  id: UUID;
  title: string;
  settings: GameSettings;
  users: User[];
}

export interface SessionSchema {
  isLoading: boolean;
  data?: Session;
  error?: string;
}
