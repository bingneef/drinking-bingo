import { combineReducers } from "redux";
import { user } from "./user/reducers";
import { preferences } from "./preferences/reducers";

const appReducer = combineReducers({
  user,
  preferences
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET_STORE") {
    state = undefined;
  }

  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
