import {RootActionTypes, RESET_STORE} from './types';

export const resetStore = (): RootActionTypes => ({
  type: RESET_STORE,
  payload: null,
});
