import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Users from './components/users/Users'
import Posts from "./components/posts/Posts";
import {getPostComments, getUserPosts} from "./servises/API";
import {useState} from "react";

function App() {
    const [userPosts, setUserPosts] = useState(null);
    const fromApp=(id)=> {
        getUserPosts(id).then(value => setUserPosts(value));
    }
    const [postComments, setPostComments]= useState(null);
    const showComments=(id)=>{
        getPostComments(id).then(value => setPostComments(value));
    }
    return (
        <Router>
            <div>
                <div className='links'><Link to={'/users'}>to users page</Link>
                    <br/>
                    <Link to={'/posts'}>to posts page</Link>
                    <br/>
                </div>

                <Switch>
                    <Route exact path={'/users'} render={() => <Users fromApp={fromApp}/>}/>;
                    <Route exact path={'/posts'} render={() => <Posts showComments={showComments}/>}/>;


                </Switch>
            </div>
        </Router>
    );
}

export default App;
