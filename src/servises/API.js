import axios from 'axios';
const options = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
};
const axiosInstance = axios.create(options);

const getUsers = () => axiosInstance('users');
const getUser = (id) => axiosInstance('users/' + id);
const getPosts =(id)=> axiosInstance('posts');
const getUserPosts = (id) => axiosInstance('users/' + id + '/posts');
const getPostComments=(id)=>axiosInstance('/posts/'+id+'/comments')

export { getUsers, getUser, getPosts, getUserPosts, getPostComments};
