export interface GameListItem {
  id: number;
  label: string;
  toggled?: boolean;
  rowToggled?: boolean;
  colToggled?: boolean;
}

export interface Game {
  items: GameListItem[];
  toggled: number[];
  size: number;
  lines: number;
}

export type GameState = {
  current?: Game;
};

export const NEW_GAME = "NEW_GAME";
interface NewGameAction {
  type: typeof NEW_GAME;
  payload: { size: number };
}

export const TOGGLE_ITEM = "TOGGLE_ITEM";
interface ToggleItemAction {
  type: typeof TOGGLE_ITEM;
  payload: { id: number };
}

export const CLEAR_GAME = "CLEAR_GAME";
interface ClearGame {
  type: typeof CLEAR_GAME;
  payload: null;
}

export type GameActionTypes = NewGameAction | ToggleItemAction | ClearGame;
