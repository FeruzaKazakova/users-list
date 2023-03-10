import { useState } from 'react';
import './App.css';
import { UsersForm } from './Components/UsersForm/UsersForm';
import {UsersList} from './Components/UsersList/UsersList';

function App() {

  const [users, setUsers] = useState([]);

  const addUser = (inputText, inputNumber) => {
    setUsers([...users, {text:inputText, number:inputNumber, id:Math.random().toString()}])
  }

  return (
    <div className="App">
      <UsersForm onAddUser={addUser}/>
      <UsersList users={users} setUsers={setUsers}/>
    </div>
  );
}

export default App;
