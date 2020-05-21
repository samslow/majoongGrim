import reducers from "store";
import { createStore, Store } from "redux";

export default function configureStore(): Store {
  const store = createStore(
    reducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}
