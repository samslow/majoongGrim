import { combineReducers } from "redux";
import headerReducer from "store/headerReducer";
import layerReducer from "store/layerReducer";
import toolboxReducer from "store/toolboxReducer";

const rootReducer = combineReducers({
  headerReducer,
  layerReducer,
  toolboxReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
