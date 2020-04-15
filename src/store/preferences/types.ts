export interface Preferences {
  theme: "base" | "dark";
}

export interface Preference {
  key: keyof Preferences;
  value: any;
}

export type PreferencesState = Preferences;

export const SET_PREFERENCE = "SET_PREFERENCE";
interface SetPreferencesAction {
  type: typeof SET_PREFERENCE;
  payload: Preference;
}

export const RESET_PREFERENCES = "RESET_PREFERENCES";
interface ClearPreferencesAction {
  type: typeof RESET_PREFERENCES;
  payload: null;
}

export type PreferencesActionTypes =
  | SetPreferencesAction
  | ClearPreferencesAction;
