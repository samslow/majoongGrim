import React from "react";
import { Provider } from "react-redux";

import Home from "pages/Home";
import configureStore from "store/configureStore";
import "Font.css";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
