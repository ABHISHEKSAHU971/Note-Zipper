import axios from "axios";
import {
  NOTE_LIST_REQUEST,
  NOTE_LIST_SUCCESS,
  NOTE_LIST_FAIL,
} from "./../Constant/noteConstant";

export const ListNotes = () => async (dispatch, getState) => {
  try {
    dispatch({ type: NOTE_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo);
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo}`,
      },
    };

    const { data } = await axios.get("/notes", config);

    dispatch({ type: NOTE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NOTE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
