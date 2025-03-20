import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/MeitalTwito/proj-cloest-vue",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getItems() {
    return apiClient.get("/items");
  },
  getItem(id) {
    return apiClient.get(`/items/${id}`);
  },
};
