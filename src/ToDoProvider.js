import React, { createContext, useState } from 'react';

export const ToDoContext = createContext({
    toDos: [],
    addToDo: (text) => { },
});

export function ToDoProvider({ children }) {
    const [toDos, setToDos] = useState([]);
    const addToDo = (text) => {
        setToDos([...toDos, { text, completed: false }]);
    };

    return (
        <ToDoContext.Provider value={{ toDos, addToDo }}>
            {children}
        </ToDoContext.Provider>
    );
}
