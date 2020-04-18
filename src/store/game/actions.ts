import { GameActionTypes, NEW_GAME, TOGGLE_ITEM, CLEAR_GAME } from "./types";

export const newGame = (size: number): GameActionTypes => {
  return {
    type: NEW_GAME,
    payload: { size },
  };
};

export const toggleItem = (id: number): GameActionTypes => ({
  type: TOGGLE_ITEM,
  payload: { id },
});

export const clearGame = (): GameActionTypes => ({
  type: CLEAR_GAME,
  payload: null,
});
