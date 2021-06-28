import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {getPost, getPosts} from "./servises/API";
import Posts from "./posts/Posts";

function App() {

let [post, setPost] = useState(null);

let appFn = (id)=>{
  getPost(id).then(value => setPost(value.data));
}

  let [posts, setPosts] = useState([]);
  useEffect(()=> {
    getPosts().then(value => setPosts(value.data));
  },[]);


  return (

    <div>
<Posts items={posts} appFn={appFn}/>
      <hr/>
      {post && <div>{JSON.stringify(post)}</div>};
      <hr/>
    </div>
  );
}

export default App;
