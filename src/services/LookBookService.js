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
  getLookBook() {
    return apiClient.get("/lookBook");
  },
  getLook(id) {
    return apiClient.get(`/lookBook/${id}`);
  },
};
