import Layer from "modules/layers/Layer";

type reduxState = {
  layers: Layer[];
  selectedId: number | null;
};

export const CHANGE_LAYER_LOCATION = "CHANGE_LAYER_LOCATION" as const;
export const SET_ZINDEX = "SET_ZINDEX" as const;
export const REMOVE_LAYER = "REMOVE_LAYER" as const;
export const ADD_LAYER = "ADD_LAYER" as const;
export const GET_SORTED_LAYERS = "GET_SORTED_LAYERS" as const;
export const SET_SELECTED = "SET_SELECTED" as const;

export const initialState: reduxState = {
  layers: [],
  selectedId: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_LAYER_LOCATION": {
      console.log(action.id, action.x, action.y);
      const layerIndex = state.layers
        .map((layer) => layer.id)
        .indexOf(action.id);
      state.layers[layerIndex].x = action.x;
      state.layers[layerIndex].y = action.y;
      return {
        ...state,
        layers: [...state.layers],
      };
    }
    case "SET_ZINDEX": {
      console.log(action.id, action._type);
      const layerIndex = state.layers.filter(
        (layer) => layer.id === action.id,
      )[0].id;
      const upLayer = state.layers.filter(
        (layer) => layer.zIndex === state.layers[layerIndex].zIndex + 1,
      )[0];
      const downLayer = state.layers.filter(
        (layer) => layer.zIndex === state.layers[layerIndex].zIndex - 1,
      )[0];

      if (action._type == "up" && upLayer) {
        [state.layers[layerIndex].zIndex, state.layers[upLayer.id].zIndex] = [
          state.layers[upLayer.id].zIndex,
          state.layers[layerIndex].zIndex,
        ];
      } else if (action._type == "down" && downLayer) {
        [state.layers[layerIndex].zIndex, state.layers[downLayer.id].zIndex] = [
          state.layers[downLayer.id].zIndex,
          state.layers[layerIndex].zIndex,
        ];
      } else {
        console.log(
          `${action.id} layer have reach ${action._type} zIndex limit`,
        );
      }

      return {
        ...state,
        layers: [...state.layers],
      };
    }
    case "REMOVE_LAYER": {
      const removeIndex = state.layers
        .map((layer) => {
          return layer.id;
        })
        .indexOf(action.id);
      state.layers.splice(removeIndex, 1);
      return {
        ...state,
        layers: [...state.layers],
      };
    }
    case "ADD_LAYER": {
      return {
        ...state,
        layers: [...state.layers, action.layer],
      };
    }
    case "SET_SELECTED": {
      const actionId =
        action.id != null
          ? action.id
          : state.layers[state.layers.length - 1].id;
      console.log("actionId", actionId);
      return {
        ...state,
        selectedId: actionId,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
