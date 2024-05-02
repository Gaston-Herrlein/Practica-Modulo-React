import {
  client,
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from "../../api/client.js";

export const register = async ({ username, password, remember }) => {
  return client
    .post("/auth/register", { username, password })
    .then(() => {
      login({ username, password, remember });
    })
    .catch((error) => console.log(error));
};

export const login = async ({ username, password, remember }) => {
  return client
    .post("/auth/login", { username, password })
    .then(({ accessToken }) => {
      console.log("token: ", accessToken);
      remember ? setJWT(accessToken) : null;
    })
    .catch((error) => console.log(error));
};

const setJWT = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
  setAuthorizationHeader(accessToken);
};

const removeJWT = (accessToken) => {
  localStorage.removeItem("accessToken");
  removeAuthorizationHeader();
};
