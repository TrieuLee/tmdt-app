import axios from "axios";
import domain from "././utils/domain";
import { useNavigate } from "react-router-dom";
export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(`${domain}/api/auth/login`, userCredentials);

    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  }
};

export const forgetCall = async (userCredentials, dispatch) => {
  dispatch({ type: "FORGET_START" });
  try {
    const res = await axios.put(`${domain}/api/auth/forget`, userCredentials);
    dispatch({ type: "FORGET_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "FORGET_FAILURE", payload: err.response.data });
  }
};
