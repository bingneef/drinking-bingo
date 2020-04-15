import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import RootRouter from "./routes/RootRouter";
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import StoreThemeProvider from "./components/ThemedApp";

import "typeface-roboto";
import "./services/i18n.service";

const App = () => (
  <Suspense fallback={<div />}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StoreThemeProvider>
          <RootRouter />
        </StoreThemeProvider>
      </PersistGate>
    </Provider>
  </Suspense>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
