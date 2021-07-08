import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'

const NesteChild = () => {
    const counter = useSelector(({counter: {value}}) => value)
    const dispatch = useDispatch();

    return (
        <header className="App-header">
            <h1>{counter}</h1>
            <button
                onClick={() => {
                    dispatch({type: 'INC'})
                }
                }>inc
            </button>

            <button
                onClick={() => {
                    dispatch({type: 'DEC'})
                }
                }>dec
            </button>

            <button
                onClick={() => {
                    dispatch({type: 'RECET'})
                }
                }>recet
            </button>
        </header>
    )
}

function App() {
    return (
        <div className="App">
            <NesteChild/>
        </div>
    );
}

export default App;
