import {useState} from "react";

export default function Form ({users}){

    const [user,setUser]= useState({});
    let userChoose=(e)=>{
        let user_id = e.target.value;
        let find = users.find(user=> user.id === user_id);
        setUser(find);
    };
    return (
        <div>
            <form onSubmit={userChoose}>
                <select onChange={userChoose} value={user}>

                    {users.map(value => <option key={value.name} value={value.id}>{value.name}</option>)
                    }
                </select>
            </form>
        </div>
    );
}
