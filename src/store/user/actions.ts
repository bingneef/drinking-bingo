import {
  User,
  UserActionTypes,
  SET_USER,
  CLEAR_USER,
  UPDATE_USER
} from "./types";

export const setUser = (user: User): UserActionTypes => {
  return {
    type: SET_USER,
    payload: user
  };
};

export const updateUser = (user: User): UserActionTypes => ({
  type: UPDATE_USER,
  payload: user
});

export const clearUser = (): UserActionTypes => ({
  type: CLEAR_USER,
  payload: null
});
