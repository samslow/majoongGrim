type reduxState = {
  selectedTool: string;
};

export const CHANGE_SELECTED_TOOL = "CHANGE_SELECTED_TOOL" as const;

export const initialState: reduxState = {
  selectedTool: "", // "이미지 삽입" or "텍스트 삽입"
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_SELECTED_TOOL": {
      return { selectedTool: action.name };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
