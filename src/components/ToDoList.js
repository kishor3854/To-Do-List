import './style.css';

const ToDoList = ({ todos, deleteTodo }) => {
    console.log('todos data', todos);
    return (
        <div data-testid="TodoList">
            <p data-testid="todoCount">Total tasks : {todos.length}</p>
            {todos.map((todo, i) => (
                <div className="todo" data-testid="todo">
                    <span className="name">{todo.name}</span>
                    <br />
                    <button
                        data-testid="deleteButton"
                        className="deleteButton"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        DELETE
                    </button>

                </div>
            ))}
        </div>
    )
}

export default ToDoList;