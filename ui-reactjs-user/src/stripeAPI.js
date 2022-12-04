import domain from "./utils/domain";
export const url = `${domain}/api`;

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
