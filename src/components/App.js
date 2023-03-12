import React, { useState } from 'react'
import '../styles/App.css';
// import ToDo from './ToDo';

function ToDo() {
  return (<tr>
    <td>
      <p>{todo.id}</p>
    </td>
    <td>
      <input />
    </td>
    <td>
      <p>{todo.createdAt}</p>
    </td>
  </tr>)
}


function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);
  const reverseOrder=()=>{
    setTodos([...todos].reverse());
  }

  return (
    <div id="main">
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
        {todos.map((todo) => (
            <ToDo
              key={todo.id}
              todoId={todo.id}
              createdAt={todo.createdAt}
              text={todo.text}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default App;
