import {useEffect, useState} from "react";
import Post from "../post/Post";


export default function Posts(){
    let [posts, setPosts] = useState([]);

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(postsfromServer=>{
            setPosts(postsfromServer);
        });
}, []);

    return (
        <div>
            {
                posts.map(posts => <Post item={posts}/>)
            }
        </div>
    );
}
