import './App.css';
import {createRef} from "react";

function App() {
let myFormRef = createRef();
let myButton = createRef();
  const onFormSubmit =(e)=>{
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(myFormRef.current.username.value);
    console.log(myButton.current)
  };
  return (
    <div>
      <form action={'/someUrl'} method={'post'} onSubmit={onFormSubmit} ref={myFormRef}>
        <input type="text" name={'username'}/>
        <button ref={myButton}>save</button>
      </form>
    </div>
  );
}

export default App;
