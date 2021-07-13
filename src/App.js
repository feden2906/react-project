import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {todosReducer} from "./reducers/todosReduser";


const CreateTodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false)

    const submit = async (e) => {
        e.preventDefault();
        if (!title || !description || loading) return;

        try {
            setLoading(true)
            await onSubmit(title, description)
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }
    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder="title"
                onChange={({target: {value}}) => setTitle(value)}
                value={title}/>
            <br/>
            <br/>
            <input
                type="text"
                placeholder="description"
                onChange={({target: {value}}) => setDescription(value)}
                value={description}/>
            <br/>
            <br/>
            <button disabled={!title || !description || loading} type={'submit'}>create todo</button>
        </form>
    )
}

const TodoList = ({todos, isLoading})=>{


    return(
        <div>
            {
                todos.map(todo=>(
                    <div>
                        <h4>{todo.title}</h4>
                        <p>{todo.description}</p>
                    </div>
                ))}
        </div>
    )
}

function App() {

    const {todos} = useSelector(({todosReducer}) => todosReducer)
    const dispatch = useDispatch()

useEffect(()=>{
    fetchTodos()
},[])
    const fetchTodos = async ()=>{
        try {
            const response = await fetch('https://localhost:8888/get-todos')
            const data = await response.json();
            dispatch({type:'ADD_TODOS', payload: data})
        } catch (e) {
            console.log(e)
        } finally {

        }
    }



    const onTodoCreate = async (title, description) => {
        if (!title || !description) return;
        const response = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const data = await response.json();
        console.log(data)
    }
    return (
        <div>
            <CreateTodoForm onSubmit={onTodoCreate}/>
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;
