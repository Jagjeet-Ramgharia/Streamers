import axios from "../../axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthAction";

export const login = async (userCredentials, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", userCredentials,{
      headers:{
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).AccessToken
      }
    });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
