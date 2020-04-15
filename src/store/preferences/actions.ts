import {
  Preference,
  PreferencesActionTypes,
  SET_PREFERENCE,
  RESET_PREFERENCES
} from "./types";

export const setPreference = (
  preference: Preference
): PreferencesActionTypes => {
  return {
    type: SET_PREFERENCE,
    payload: preference
  };
};

export const clearPreferences = (): PreferencesActionTypes => ({
  type: RESET_PREFERENCES,
  payload: null
});
