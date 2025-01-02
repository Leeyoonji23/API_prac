import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getPosts = async () => {
  const response = await axiosInstance.get("/posts");
  return response.data;
};
