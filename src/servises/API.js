import axios from 'axios';
let options ={
    baseURL: 'https://jsonplaceholder.typicode.com/'
};
let axiosInstance = axios.create(options);
const getUsers = ()=>axiosInstance('users');
const getUser = (id)=> axiosInstance('users/'+id);
const getUserPosts = (id)=> axiosInstance('users/'+id+'/posts');
export {getUsers, getUser, getUserPosts};
