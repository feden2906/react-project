import axios from 'axios';
const options = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
};
const axiosInstance = axios.create(options);
const getUsers = ()=> axiosInstance('users');
const getUserPosts = (id)=> axiosInstance('users/'+id+'/posts');
export {getUsers, getUserPosts}
