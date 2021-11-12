import React, { useState } from 'react'
import Timer from './Timer'
function TodosList({ id, description, removeTodo }) {
    const [isDone, setIsDone] = useState('');
    return (
        <div>
            <li className="list-of-todos" style={isDone ? { textDecoration: "line-through" } : { textDecoration: "" }}>{description}
                <span>
                    <input type="checkbox" onClick={() => setIsDone(!isDone)} />
                    <button onClick={() => removeTodo(id)}>Delete</button>
                </span>
            </li>
        </div>
    )
}
const RenderedTodos = ({ todos }) => {
    const [addTodo, setAddTodo] = useState(todos);
    const [value, setValue] = useState('');
    //add item to todolist
    const OnClickAddTodo = () => {
        if (value !== "") {
            const myNextTodos = { id: addTodo.length + 1, description: value };
            const myNextTodoNames = addTodo.concat(myNextTodos);
            setAddTodo(myNextTodoNames)
        }
    }
    //Remove from  todo
    const removeTodo = (removeId) => {
        const newTodos = addTodo.filter((data) => {
            return data.id !== removeId
        })
        setAddTodo(newTodos)
      }

return (
        <>
            <ul>
                <h1 className="todo-header">Todo List</h1>
                <Timer />
                {addTodo.length > 0 ? (
                    addTodo.map(todo => {
                        return (
                            <TodosList
                                description={todo.description}
                                key={todo.id}
                                removeTodo={removeTodo}
                                id={todo.id}
                            />
                        );
                    })) : "No Items"}

<div className="addtodo_button">
                    <button onClick={OnClickAddTodo}>Add todo</button>
                    <input type="text" placeholder='Add new todos here'
                        onChange={(e) => setValue(e.target.value)} value={value}></input>
                </div>
            </ul>
        </>
    )
}
export default RenderedTodos; 