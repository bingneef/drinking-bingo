import { Game, GameListItem } from "./types";
import shuffle from "lodash/shuffle";
import {
  GameState,
  GameActionTypes,
  NEW_GAME,
  TOGGLE_ITEM,
  CLEAR_GAME,
} from "./types";

import data from "../../data/first-dates.json";
import { calcLinesForItems, assignToggledStateToListItems } from "./helpers";

const initialGameState: GameState = {};

function generateGame(size: number): Game {
  const items = shuffle(data.items)
    .slice(0, size ** 2)
    .map((label, index) => ({ label, id: index, toggled: false }));

  return {
    items,
    lines: 0,
    toggled: [],
    size,
  };
}

function toggleItemInList(id: number, items: GameListItem[]) {
  const item = items.find((item) => item.id === id);

  if (item) {
    item.toggled = !item.toggled;
    items = assignToggledStateToListItems(items);
  }

  return items;
}

export const gameReducer = (
  state = initialGameState,
  action: GameActionTypes
): GameState => {
  switch (action.type) {
    case NEW_GAME:
      return {
        current: generateGame(action.payload.size),
      };
    case TOGGLE_ITEM:
      if (!state.current) {
        return state;
      }

      const items = toggleItemInList(action.payload.id, state.current.items);

      return {
        ...state,
        current: {
          ...state.current,
          lines: calcLinesForItems(items),
          items,
        },
      };
    case CLEAR_GAME:
      return {};
    default:
      return state;
  }
};
