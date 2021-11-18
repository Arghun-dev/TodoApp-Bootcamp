import Todo from '../Todo';

const TodosList = ({ todos }) => {
    if (!todos.length) return <div style={{ marginTop: 50 }}>List is Empty!</div>

    return todos.map((todo) => <Todo key={todo.id} todo={todo} />)
};

export default TodosList;