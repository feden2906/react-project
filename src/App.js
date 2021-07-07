import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Users from "./components/users/Users";

function App() {

    return (
        <Router>
            <div>
                <div className='title'><Link to={'/users'}>USERS PAGE</Link></div>
                <Switch>
                    <Route path={'/users'} component={Users}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
