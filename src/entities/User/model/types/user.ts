export enum UserRole {
  DEALER = 'dealer',
  GAMER = 'gamer',
  SPECTATOR = 'spectator',
}

export interface User {
  id: string;
  role: UserRole;
  firstName: string;
  lastName?: string;
  position?: string;
  avatar?: string;
}

export interface UserSchema {
  data?: User;
  isLoading: boolean;
  error?: string;
}
