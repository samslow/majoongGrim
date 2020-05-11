import React from "react";
import { Provider } from "mobx-react";

import Home from "pages/Home";
import RootStore from "stores/RootStore";

const rootStore = new RootStore();

const App = () => {
  return (
    <Provider {...rootStore}>
      <Home />
    </Provider>
  );
};

export default App;
