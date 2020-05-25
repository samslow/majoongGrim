import Layer from "modules/layers/Layer";
import TextLayer from "modules/layers/TextLayer";
import { swapZindex } from "modules/functions/util";

type reduxState = {
  layers: Layer[];
  selectedId: number | null;
};

export enum LayerActions {
  CHANGE_LAYER_LOCATION = "CHANGE_LAYER_LOCATION",
  SET_ZINDEX = "SET_ZINDEX",
  REMOVE_LAYER = "REMOVE_LAYER",
  ADD_LAYER = "ADD_LAYER",
  GET_SORTED_LAYERS = "GET_SORTED_LAYERS",
  SET_SELECTED = "SET_SELECTED",
  DESELECT = -1,
  ADJUST_FONTTYPE = "ADJUST_FONTTYPE",
  ADJUST_FONTSIZE = "ADJUST_FONTSIZE",
  ADJUST_FONTCONTENT = "ADJUST_FONTCONTENT",
  ADJUST_FONTFAMILY = "ADJUST_FONTFAMILY",
  ADJUST_ANGLE = "ADJUST_ANGLE",
  ADJUST_SIZE = "ADJUST_SIZE",
}

export const initialState: reduxState = {
  layers: [],
  selectedId: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LayerActions.CHANGE_LAYER_LOCATION: {
      console.log(action.id, action.x, action.y);
      const layerIndex = state.layers
        .map((layer) => layer.id)
        .indexOf(action.id);
      const target = state.layers[layerIndex];
      target.move(action.x, action.y);
      state.layers[layerIndex] = target;

      return {
        ...state,
        layers: [...state.layers],
      };
    }
    case LayerActions.SET_ZINDEX: {
      const target = state.layers.filter((layer) => layer.id === action.id)[0];
      const upLayer = state.layers.filter(
        (layer) => layer.zIndex === state.layers[target.id].zIndex + 1,
      )[0];
      const downLayer = state.layers.filter(
        (layer) => layer.zIndex === state.layers[target.id].zIndex - 1,
      )[0];

      if (action._type == "up" && upLayer) {
        state.layers = swapZindex(state.layers, target.id, upLayer.id);
      } else if (action._type == "down" && downLayer) {
        state.layers = swapZindex(state.layers, target.id, downLayer.id);
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
    case LayerActions.REMOVE_LAYER: {
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
    case LayerActions.ADD_LAYER: {
      return {
        ...state,
        layers: [...state.layers, action.layer],
        selectedId: action.layer.id,
      };
    }
    case LayerActions.SET_SELECTED: {
      let id;
      if (action.id == LayerActions.DESELECT) {
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
    case LayerActions.ADJUST_FONTTYPE: {
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
    case LayerActions.ADJUST_FONTSIZE: {
      const layerIndex = state.layers
        .map((layer) => layer.id)
        .indexOf(action.id);
      const target = state.layers[layerIndex] as TextLayer;
      const FONT_SIZE = action.fontSize;
      target.fontSize = FONT_SIZE;
      target.height = action.fontSize;
      target.width = target.content.length * FONT_SIZE;

      return {
        ...state,
        layers: [...state.layers],
      };
    }
    case LayerActions.ADJUST_FONTCONTENT: {
      const layerIndex = state.layers
        .map((layer) => layer.id)
        .indexOf(action.id);
      const target = state.layers[layerIndex] as TextLayer;
      const FONT_SIZE = target.fontSize;
      target.content = action.content;
      target.width = action.content.length * FONT_SIZE;

      return {
        ...state,
        layers: [...state.layers],
      };
    }
    case LayerActions.ADJUST_FONTFAMILY: {
      const layerIndex = state.layers
        .map((layer) => layer.id)
        .indexOf(action.id);
      const target = state.layers[layerIndex] as TextLayer;
      target.fontFamily = action.fontFamily;
      return {
        ...state,
        layers: [...state.layers],
      };
    }
    case LayerActions.ADJUST_ANGLE: {
      const layerIndex = state.layers
        .map((layer) => layer.id)
        .indexOf(action.id);
      const target = state.layers[layerIndex];
      target.rotate(action.angle);

      return {
        ...state,
        layers: [...state.layers],
      };
    }
    case LayerActions.ADJUST_SIZE: {
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
