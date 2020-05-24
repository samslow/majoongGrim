import Layer from "modules/layers/Layer";
import TextLayer from "modules/layers/TextLayer";
import { swapZindex } from "modules/functions/util";

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
export const DESELECT = -1 as const;
export const ADJUST_FONTTYPE = "ADJUST_FONTTYPE" as const;
export const ADJUST_FONTSIZE = "ADJUST_FONTSIZE" as const;
export const ADJUST_FONTCONTENT = "ADJUST_FONTCONTENT" as const;
export const ADJUST_ANGLE = "ADJUST_ANGLE" as const;
export const ADJUST_SIZE = "ADJUST_SIZE" as const;

export const initialState: reduxState = {
  layers: [],
  selectedId: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_LAYER_LOCATION: {
      console.log(action.id, action.x, action.y);
      const layerIndex = state.layers
        .map((layer) => layer.id)
        .indexOf(action.id);
      const target = state.layers[layerIndex];
      target.x = action.x;
      target.y = action.y;

      state.layers[layerIndex] = target;

      return {
        ...state,
        layers: [...state.layers],
      };
    }
    case SET_ZINDEX: {
      const targetLayer = state.layers.filter(
        (layer) => layer.id === action.id,
      )[0];
      const upLayer = state.layers.filter(
        (layer) => layer.zIndex === state.layers[targetLayer.id].zIndex + 1,
      )[0];
      const downLayer = state.layers.filter(
        (layer) => layer.zIndex === state.layers[targetLayer.id].zIndex - 1,
      )[0];

      if (action._type == "up" && upLayer) {
        state.layers = swapZindex(state.layers, targetLayer.id, upLayer.id);
      } else if (action._type == "down" && downLayer) {
        state.layers = swapZindex(state.layers, targetLayer.id, downLayer.id);
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
    case REMOVE_LAYER: {
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
    case ADD_LAYER: {
      return {
        ...state,
        layers: [...state.layers, action.layer],
        selectedId: action.layer.id,
      };
    }
    case SET_SELECTED: {
      let id;
      if (action.id == DESELECT) {
        // 레이어 지정 취소 커맨드(-1)의 경우
        id = null;
      } else if (action.id != null) {
        id = action.id;
      } else {
        if (state.layers.length > 0) {
          // 아이디가 지정되지는 않았지만, 레이어 스택에 레이어가 남은 경우
          id = state.layers[state.layers.length - 1].id;
        } else {
          id = null;
        }
      }
      return {
        ...state,
        selectedId: id,
      };
    }
    case ADJUST_FONTTYPE: {
      const layerIndex = state.layers
        .map((layer) => layer.id)
        .indexOf(action.id);
      const target = state.layers[layerIndex] as TextLayer;
      const fontType = target.fontType;
      const actionFontType = action.fontType;
      if (actionFontType == "Bold") {
        target.fontType.isBold = !fontType.isBold;
      } else if (actionFontType == "Italic") {
        target.fontType.isItalic = !fontType.isItalic;
      } else if (actionFontType == "Underline") {
        target.fontType.isUnderline = !fontType.isUnderline;
      }
      state.layers[layerIndex] = target;
      return {
        ...state,
        layers: [...state.layers],
      };
    }
    case ADJUST_FONTSIZE: {
      const layerIndex = state.layers
        .map((layer) => layer.id)
        .indexOf(action.id);
      const target = state.layers[layerIndex] as TextLayer;
      target.fontSize = action.fontSize;

      return {
        ...state,
        layers: [...state.layers],
      };
    }
    case ADJUST_FONTCONTENT: {
      const layerIndex = state.layers
        .map((layer) => layer.id)
        .indexOf(action.id);
      const target = state.layers[layerIndex] as TextLayer;
      target.content = action.content;

      return {
        ...state,
        layers: [...state.layers],
      };
    }
    case ADJUST_ANGLE: {
      const layerIndex = state.layers
        .map((layer) => layer.id)
        .indexOf(action.id);
      const target = state.layers[layerIndex];
      target.angleDegree = action.angle;

      return {
        ...state,
        layers: [...state.layers],
      };
    }
    case ADJUST_SIZE: {
      const layerIndex = state.layers
        .map((layer) => layer.id)
        .indexOf(action.id);
      const target = state.layers[layerIndex];
      target.height = target.height + action.size - target.width;
      target.width = action.size;

      return {
        ...state,
        layers: [...state.layers],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
