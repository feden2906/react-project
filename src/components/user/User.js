import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

export default function User ({item, item:{id}}){
    return (
        <div className='user'>
            <div>{item.name}</div>
            <div><Link to={'/users/'+id+'/posts'}> USER POSTS </Link></div>
        </div>
    );
}
