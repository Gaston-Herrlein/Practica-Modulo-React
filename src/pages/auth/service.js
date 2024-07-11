import {
  client,
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from "../../api/client.js";
import storage from "../../utils/storage.js";

export const register = async ({
  email,
  password,
  username,
  name,
  remember,
}) => {
  return client
    .post("/api/auth/signup", { email, password, username, name })
    .then(() => {
      login({ email, password, remember });
    })
    .catch((error) => console.log(error));
};

export const login = async ({ email, password, remember }) => {
  return client
    .post("/api/auth/login", { email, password })
    .then(({ accessToken }) => {
      remember ? setJWT(accessToken) : null;
    })
    .catch((error) => {
      throw error;
    });
};

const setJWT = (accessToken) => {
  storage.set("accessToken", accessToken);
  setAuthorizationHeader(accessToken);
};

const removeJWT = (accessToken) => {
  storage.remove("accessToken");
  removeAuthorizationHeader();
};
