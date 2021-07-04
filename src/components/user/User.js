import {getUserPosts} from "../../servises/API";
import {useState} from "react";

export default function User ({singleUser, fromApp}){
    let[posts,setPosts] = useState([]);
    return (
        <div className='user'>
            <h3>{singleUser.id} - {singleUser.name}</h3>

            <div>
                <p>{singleUser.username}</p>
                <p>{singleUser.email}</p>
                <p>{singleUser.phone}</p>
                <p>{singleUser.website}</p>
                <button
                onClick={
                    ()=> {fromApp(singleUser.id);
                getUserPosts (singleUser.id).then(value=> setPosts(value));}}>Show posts</button>
            </div>
        </div>
    );
}
