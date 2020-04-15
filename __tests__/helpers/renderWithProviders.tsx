import React, { ReactNode } from "react";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "emotion-theming";
import rootReducer from "../../src/store/reducers";
import themes from "../../src/themes/themes";

export function renderWithProviders(
  ui: ReactNode,
  { initialState, store = createStore(rootReducer, initialState) }: any = {}
) {
  const base = themes["base"];

  return {
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={base}>{ui}</ThemeProvider>
      </Provider>
    ),
    store
  };
}
