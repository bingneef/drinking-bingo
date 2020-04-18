import { combineReducers } from "redux";
import { user } from "./user/reducers";
import { preferences } from "./preferences/reducers";
import { gameReducer } from "./game/reducers";

const appReducer = combineReducers({
  user,
  preferences,
  game: gameReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET_STORE") {
    state = undefined;
  }

  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
