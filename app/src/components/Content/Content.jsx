import { useState } from 'react';
import AddTodo from '../AddTodo';
import TodosList from '../TodosList';
import './Content.css';

const Content = () => {
    const [todos, setTodos] = useState([]);
    console.log('todos: ', todos)

    return (
        <div className='content'>
            <AddTodo todos={todos} setTodos={setTodos} />
            <TodosList todos={todos} />
        </div>
    )
};

export default Content;