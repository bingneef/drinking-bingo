import {
  PreferencesState,
  PreferencesActionTypes,
  SET_PREFERENCE,
  RESET_PREFERENCES
} from "./types";

const initialPreferencesState: PreferencesState = { theme: "base" };

export const preferences = (
  state = initialPreferencesState,
  action: PreferencesActionTypes
): PreferencesState => {
  switch (action.type) {
    case SET_PREFERENCE:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    case RESET_PREFERENCES:
      return initialPreferencesState;
    default:
      return state;
  }
};
