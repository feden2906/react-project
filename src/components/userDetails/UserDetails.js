import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getUser } from "../../servises/API";

export default function UserDetails() {
    const {id} = useParams()
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser(id).then(value => setUser(value.data))
    }, [id])
    console.log(user)

    return (
        <div>
            <div>id: {user?.id}</div>
            <div>phone: {user?.phone}</div>
            <div>name: {user?.name}</div>
            <div>website: {user?.website}</div>
            <div>city: {user?.address.city}</div>
            <div>street: {user?.address.street}</div>
        </div>
    );
}
