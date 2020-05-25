type reduxState = {
  selectedTool: string;
};

export enum ToolboxActions {
  CHANGE_SELECTED_TOOL = "CHANGE_SELECTED_TOOL",
}

export const initialState: reduxState = {
  selectedTool: "", // "이미지 삽입" or "텍스트 삽입"
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ToolboxActions.CHANGE_SELECTED_TOOL: {
      return { selectedTool: action.name };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
