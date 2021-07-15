import './App.css';
import Form from "./form/Form";
import {useEffect, useState} from "react";
import UserInfo from "./userInfo/UserInfo";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
          setUsers([...value])
        })
  }, [])


  return (
      <div>
        <div><Form users={users}/></div>
        {/*<div><UserInfo item={value}/></div>*/}
      </div>
  );

}
export default App;
