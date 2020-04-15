export interface User {
  id?: number;
  accessToken: string | null;
  preferences?: {
    theme: "base";
  };
}

export type UserState = User;

export const SET_USER = "SET_USER";
interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

export const UPDATE_USER = "UPDATE_USER";
interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: User;
}

export const CLEAR_USER = "CLEAR_USER";
interface ClearUserAction {
  type: typeof CLEAR_USER;
  payload: null;
}

export type UserActionTypes =
  | SetUserAction
  | UpdateUserAction
  | ClearUserAction;
