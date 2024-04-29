import { client, setAuthorizationHeader } from "../../api/client.js";

export const register = async ({ username, password, remember }) => {
  return client
    .post("/auth/register", { username, password })
    .then(({ accessToken }) => {
      remember && setAuthorizationHeader(accessToken);
    })
    .catch((error) => console.log(error));
};
