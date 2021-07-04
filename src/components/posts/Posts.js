import {useEffect, useState} from "react";
import {getPosts} from "../../servises/API";
import Post from "../post/Post";



export default function Posts (props){
   const [posts, setPosts] = useState([]);
   useEffect(()=>{
       getPosts().then(value => setPosts(value.data));
   }, [])
    return (
        <div>
            {
                posts.map((value) => <Post item={value} key ={value.id}/>)
            }

        </div>
    );
}
