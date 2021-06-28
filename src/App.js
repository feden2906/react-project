import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {getUser, getUsers, getUserPosts} from "./servises/API";
import Users from "./components/users/Users";

function App() {

    let [userposts, setUserposts] = useState(null);
    let appFn = (id) => {
        getUserPosts(id).then(value => setUserposts(value.data));
    }

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, []);

    return (
        <div>
            <Users items={users} appFn={appFn}/>
            <hr/>
            {userposts && <div>{JSON.stringify(userposts)}</div>}
        </div>
    );
}

export default App;
