type reduxState = {
  nowShape: string;
};

export enum Actions {
  CHANGE_SHAPE = "CHANGE_SHAPE",
}

export const initialState: reduxState = {
  nowShape: "HORIZONTAL_SHAPE",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.CHANGE_SHAPE: {
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
