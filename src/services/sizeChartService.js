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
    return apiClient.get("/sizeChart");
  },
  getItem(system, size) {
    return apiClient.get(`/sizeChart/${system}/${size}`);
  },
};
