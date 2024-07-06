import React, { createContext } from 'react';

const ToDoContext = createContext({
    toDos: [],
    addToDo: (text) => {},
});

function ToDoProvider ({children}){
    const [toDos, setToDos] = useState("");
    const addToDo = (text) => {
        setToDos([...toDos, {text, completed: false}])};
    
    return(
        <ToDoContext.Provider value={toDos.addToDo}>
            {children}
        </ToDoContext.Provider>
    )
};
export default ToDoProvider;