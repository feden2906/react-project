import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';
import Users from "./components/users/Users";

function App() {
    return (

        <div>
            <Menu
                pages={['users page', 'coments page', 'posts page']}
                classes = {['target', 'vvv']}
            />
            <Users/>
            <Menu
                pages={['about', 'contact us']}
                classes = {['target', 'mmm']}
            />
        </div>

    );
}

export default App;
