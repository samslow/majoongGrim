type reduxState = {
  selectedTool: string;
};

export const CHANGE_SELECTED_TOOL = "CHANGE_SELECTED_TOOL" as const;

export const initialState: reduxState = {
  selectedTool: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_SELECTED_TOOL": {
      console.log(action.name);
      return { ...state };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
