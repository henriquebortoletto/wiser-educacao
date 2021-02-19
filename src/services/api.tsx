import axios from "axios";

const api = axios.create({
  baseURL: "https://602f10414410730017c518af.mockapi.io/api",
});

export default api;
