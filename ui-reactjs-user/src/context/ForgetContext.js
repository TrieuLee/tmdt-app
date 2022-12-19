import { createContext, useReducer, useEffect } from "react";
import ForgetReducer from "./ForgetReducer";
const INTIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: null,
};
export const ForgetContext = createContext(INTIAL_STATE);
export const ForgetContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ForgetReducer, INTIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <ForgetContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ForgetContext.Provider>
  );
};
