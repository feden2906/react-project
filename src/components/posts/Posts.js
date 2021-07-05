import {useEffect, useState} from "react";
import {getPosts} from "../../servises/API";
import Post from "../post/Post";



export default function Posts ({showComments}){
   const [posts, setPosts] = useState([]);
   useEffect(()=>{
       getPosts().then(value => setPosts(value.data));
   }, [])
    return (
        <div>
            {
                posts.map((value) => <Post key={value.id} showComments ={showComments} item={value} key ={value.id}/>)
            }

        </div>
    );
}
