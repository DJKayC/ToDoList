import React, {useContext, useEffect} from 'react';
import ToDoProvider from '../ToDoProvider';
//import ReactDOM from 'react-router-dom';
import {Link} from 'react-router-dom';

function Home() {
    const {toDos} = useContext(ToDoProvider);
    useEffect(() => {
        console.log('ToDos: ', toDos);
    }, ([toDos]));

    return (
        <div>
          <h2>Todo List Application</h2>
          <Link to="/add-todo">Add ToDo</Link>
          <ul>
            {toDos.map((toDo) => (
              <li key={toDo.id}>
                <span style={{ textDecoration: toDo.completed ? 'line-through' : 'none' }}>{toDo.text}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

export default Home;