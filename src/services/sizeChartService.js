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
  getSizeChart() {
    return apiClient.get("/sizeChart");
  },
  async getSize(sizingSystem, size) {
    const response = await apiClient.get("/sizeChart");
    return response.data.find((entry) => entry[sizingSystem] === size);
  },
};
