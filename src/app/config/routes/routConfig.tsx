import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { LobbyPage } from 'pages/LobbyPage';
import { GamePage } from 'pages/GamePage';
import { GameResultPage } from 'pages/GameResultPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  LOBBY = 'lobby',
  GAME = 'game',
  GAME_RESULT = 'game_result',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOBBY]: '/lobby',
  [AppRoutes.GAME]: '/game',
  [AppRoutes.GAME_RESULT]: '/result',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.LOBBY]: {
    path: RoutePath.lobby,
    element: <LobbyPage />,
  },
  [AppRoutes.GAME]: {
    path: RoutePath.game,
    element: <GamePage />,
  },
  [AppRoutes.GAME_RESULT]: {
    path: RoutePath.game_result,
    element: <GameResultPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
