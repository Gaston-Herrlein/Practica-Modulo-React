import { client } from "../../api/client.js";

export const getTags = () => {
  return client.get("/api/v1/adverts/tags");
};

export const getAdverts = async () => {
  return client.get("/api/v1/adverts");
};

export const getAdvert = (advertId) => {
  return client.get(`/api/v1/adverts/${advertId}`);
};

export const createAdvert = (newAdvert) => {
  return client.post("/api/v1/adverts", newAdvert, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteAdvert = (advertId) => {
  return client.delete(`/api/v1/adverts/${advertId}`);
};
