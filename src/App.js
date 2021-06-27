import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {getUser, getUsers} from "./servises/API";
import Users from "./components/users/Users";

function App()
{
    let [user, setUser] = useState(null);
    let appFn = (id)=> {
        getUser(id).then(value => setUser(value.data));
    }
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, []);


    return (
        <div>
            <Users items = {users} appFn = {appFn}/>
            <hr/>
            {
                user && <div>{JSON.stringify(user)}</div>
            }
            <hr/>
        </div>);
}

export default App;
