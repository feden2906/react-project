import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {getUser, getUsers, getUserPosts} from "./servises/API";
import Users from "./components/users/Users";
import UserPost from "./components/userPost/UserPost";

export default function App() {

    let [userPosts, setUserPosts] = useState([]);
    let appFn = (id) => {
        getUserPosts(id).then(value => setUserPosts(value.data));
    }

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, []);

    return (
        <div>
            <Users items={users} appFn={appFn}/>
            <hr/>
            {
                userPosts.map((value) => {
                    return <UserPost key={value.id} item={value}/>
                })
            }
        </div>
    );

}
