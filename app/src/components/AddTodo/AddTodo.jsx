import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import './AddTodo.css';

const AddTodo = ({ todos, setTodos }) => {
    const [todoText, setTodoText] = useState('');

    console.log('todoText: ', todoText)

    const addTodo = () => {
        const updatedTodos = [...todos, { id: uuid(), text: todoText, completed: false }];
        setTodos(updatedTodos);
        setTodoText("")
    }

    return (
        <div className='root'>
            <input 
                value={todoText} 
                onChange={(e) => setTodoText(e.target.value)} placeholder='todo...' 
            />
            <button onClick={addTodo}>Add</button>
        </div>
    )
};

export default AddTodo;