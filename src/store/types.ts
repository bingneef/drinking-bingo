import { UserState } from "./user/types";
import { PreferencesState } from "./preferences/types";

export type StoreType = {
  user: UserState;
  preferences: PreferencesState;
  _persist: {
    version: number;
    rehydrated: boolean;
  };
};

export const RESET_STORE = "RESET_STORE";
interface ResetStoreAction {
  type: typeof RESET_STORE;
  payload: null;
}

export type RootActionTypes = ResetStoreAction;
