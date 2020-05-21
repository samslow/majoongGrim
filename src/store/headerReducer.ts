type reduxState = {
  nowShape: string;
};

export const CHANGE_SHAPE = "CHANGE_SHAPE" as const;

export const initialState: reduxState = {
  nowShape: "HORIZONTAL_SHAPE",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_SHAPE": {
      return {
        ...state,
        nowShape: action.nowShape,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
