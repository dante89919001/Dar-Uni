import axios from 'axios';
import { Post, PostFormValues } from '../types/posts';

const API_ROOT = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => {
  return axios.get<Post[]>(`${API_ROOT}/posts`, {}).then((res) => res.data);
};

export const getPost = (id: number) => {
  return axios.get<Post>(`${API_ROOT}/posts/${id}`, {}).then((res) => res.data);
};

export const createPost = (data: PostFormValues) => {
  return axios.post(`${API_ROOT}/posts`, data).then((res) => res.data);
};

export const updatePost = (id: number, data: PostFormValues) => {
  return axios.put(`${API_ROOT}/posts/${id}`, data).then((res) => res.data);
};
