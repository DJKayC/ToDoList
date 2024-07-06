import React from 'react';
import ToDoProvider from './ToDoProvider';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import AddToDo from './Pages/AddToDo';

function App() {
  return (
    <Router>
      <ToDoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-ToDo" element={<AddToDo />} />
        </Routes>
      </ToDoProvider>
    </Router>
  );
}

export default App;
