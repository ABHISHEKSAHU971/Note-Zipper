import {
  NOTE_LIST_REQUEST,
  NOTE_LIST_SUCCESS,
  NOTE_LIST_FAIL,
} from "./../Constant/noteConstant";
export const noteListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTE_LIST_REQUEST:
      return { Loader: true };
    case NOTE_LIST_SUCCESS:
      return { Loader: false, userInfo: action.payload };
    case NOTE_LIST_FAIL:
      return { Loader: false, error: action.payload };

    default:
      return state;
  }
};
