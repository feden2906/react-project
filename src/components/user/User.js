import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

export default function User({item}) {
    return (
        <div className='user'>
            <div>{item.name}</div>  <div><Link to={'/users' + item.id}>user details</Link></div>
        </div>
    );
}
