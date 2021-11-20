import axios from "axios";
import {
  actionStart,
  loginSuccess,
  actionFailure,
  actionSuccess,
} from "./reducers/userReducer";

const BASE_URL = "http://localhost:4000";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTdiM2Y2NzMyMTRmZTNlMjEwOGNkMCIsImlhdCI6MTYzNzM4MDQ5OSwiZXhwIjoxNjM3NDY2ODk5fQ.x08r1AsnGxLhuYNicd6KKiqCJjLmLyboiHdHfR79sMY";

// const request = axios.create({
//   baseURL: BASE_URL,
//   headers: { token: `Bearer ${TOKEN}` },
// });

export const register = async (dispatch, user) => {
  dispatch(actionStart());
  try {
    await axios.post(BASE_URL + "/api/auth/register", user);
    dispatch(actionSuccess());
  } catch (error) {
    dispatch(actionFailure());
  }
};

export const login = async (dispatch, user) => {
  dispatch(actionStart());
  try {
    const res = await axios.post(BASE_URL + "/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(actionFailure());
  }
};
