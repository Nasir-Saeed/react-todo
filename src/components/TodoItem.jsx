import React from 'react'

function TodoItem({ todo, updateTodo, removeTodo }) {
    return (
        <>
            {
                todo && todo.map((item) => (
                    <div key={item.id} className='todoItemDiv'>
                        <span>{item.todo}</span>
                        <button onClick={() => updateTodo(item)}>Edit</button>
                        <button onClick={() => removeTodo(item.id)}>Remove</button>
                    </div>
                ))}
        </>
    )
}

export default TodoItem