import React, {useState} from 'react'
import List from './List'
import AddTodo from './AddTodo'
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function AddTodo (item) {
    const newTodos = [...todos, item]
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
