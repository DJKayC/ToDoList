import React, { useContext, useRef } from "react";
import { ToDoContext } from "../ToDoProvider";
import { useNavigate } from "react-router-dom";

function AddToDo() {
    const { addToDo } = useContext(ToDoContext);
    const inputRef = useRef(null);
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newToDo = inputRef.current.value;
        if (newToDo) {
            addToDo(newToDo);
            inputRef.current.value = '';
            Navigate('/');
        }
    };

    return (
        <div>
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} placeholder="Add a new task" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddToDo;
