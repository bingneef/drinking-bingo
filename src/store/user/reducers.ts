import {
  UserState,
  UserActionTypes,
  SET_USER,
  CLEAR_USER,
  UPDATE_USER
} from "./types";
const initialUserState: UserState = { accessToken: null };

export const user = (
  state = initialUserState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload
      };
    case CLEAR_USER:
      return { accessToken: null };
    default:
      return state;
  }
};
