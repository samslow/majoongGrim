import ImageLayer from "modules/layers/ImageLayer";

type reduxState = {
  layers: ImageLayer[];
};

export const CHANGE_LAYER_LOCATION = "CHANGE_LAYER_LOCATION" as const;
export const SET_ZINDEX = "SET_ZINDEX" as const;
export const REMOVE_LAYER = "REMOVE_LAYER" as const;
export const ADD_LAYER = "ADD_LAYER" as const;

export const initialState: reduxState = {
  layers: [],
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
      const layerIndex = state.layers
        .map((layer) => layer.id)
        .indexOf(action.id);

      if (
        action._type == "up" &&
        state.layers[layerIndex].zIndex < state.layers[0].zIndex
      ) {
        [
          state.layers[layerIndex].zIndex,
          state.layers[layerIndex - 1].zIndex,
        ] = [
          state.layers[layerIndex - 1].zIndex,
          state.layers[layerIndex].zIndex,
        ];
        [state.layers[layerIndex], state.layers[layerIndex - 1]] = [
          state.layers[layerIndex - 1],
          state.layers[layerIndex],
        ];
      } else if (
        action._type == "down" &&
        state.layers[layerIndex].zIndex >
          state.layers[state.layers.length - 1].zIndex
      ) {
        [
          state.layers[layerIndex].zIndex,
          state.layers[layerIndex + 1].zIndex,
        ] = [
          state.layers[layerIndex + 1].zIndex,
          state.layers[layerIndex].zIndex,
        ];
        [state.layers[layerIndex], state.layers[layerIndex + 1]] = [
          state.layers[layerIndex + 1],
          state.layers[layerIndex],
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
    default: {
      return {
        ...state,
      };
    }
  }
};
