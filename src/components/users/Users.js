import {useState,useEffect} from 'react'
import {getUsers} from "../../servises/API";
import User from "../user/User";

export default function Users ({usersList, fromApp}){
          const [users, setUsers] = useState([]);
        useEffect(() => {
            getUsers().then(value => setUsers(value.data));
        }, []);
    return (
        <div>
            {
            users.map((value) => <User fromApp = {fromApp} key = {value.id} singleUser={value}/>)
            }

        </div>
    );
}
