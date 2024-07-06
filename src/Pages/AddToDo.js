import React, {useContext, useRef} from "react";
import ToDoProvider from "../ToDoProvider";

function AddToDo(){
    const {addTodo} = useContext(ToDoProvider);
    const inputRef = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newToDo=inputRef.current.value;
        if (newToDo){
            addTodo(newToDo);
            inputRef.current.value = '';
        }
    }
    return(
        <div>
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} placeholder="Add a new task" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
};
export default AddToDo;