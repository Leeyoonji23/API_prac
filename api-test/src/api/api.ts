import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

//글 목록
export const getPosts = async () => {
  const response = await axiosInstance.get("/posts");
  return response.data;
};

//글 조회
export const getPostId = async (postId: number) => {
  const response = await axiosInstance.get(`/posts/${postId}`);
  return response.data;
};

export const createPost = async (postData: { title: string; body: string }) => {
  const response = await axiosInstance.post("/posts", postData);
  return response.data;
};

//게시글 수정
export const rewritePost = async (
  postId: number,
  postData: { title: string; body: string }
) => {
  const response = await axiosInstance.put(`/posts/${postId}`, postData);
  return response.data;
};

//게시글 삭제
export const deletePost = async (postId: number) => {
  const response = await axiosInstance.delete(`/posts/${postId}`);
  return response.data;
};
