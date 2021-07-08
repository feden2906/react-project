import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'

const NesteChild = () => {
    const counter = useSelector(({counter: {value}}) => value)
    const dispatch = useDispatch();

    function getNumber(e){
        e.preventDefault()
    }


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

            <form onSubmit={getNumber}>
                <input type="number" name='number'/>
                <button onClick={()=>{
                    dispatch({type:'INC_CUSTOM'})}}>ok</button>
            </form>
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
