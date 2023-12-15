import { UUID } from 'crypto';
import { User, UserRole } from 'entities/User';

export interface SessionSettings {
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
  settings: SessionSettings;
  users: User[];
}

export interface SessionSchema {
  isLoading: boolean;
  data?: Session;
  error?: string;
  isSessionExist: boolean;
}

export interface SessionDTO {
  firstName: string;
  role: UserRole;
  lastName?: string;
  position?: string;
  avatar?: string;
}

export interface CreateSessionDTO extends SessionDTO {
  title: string;
}
