import {useEffect, useState} from "react";
import UserInfo from "../userInfo/UserInfo";

export default function Info (props){

    const [info,setInfo] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setInfo([...value.data])
            })
    },[])


    return (
        <div>
            {
               info.map(value => <UserInfo item={value}/>)
            }
        </div>
    );
}
