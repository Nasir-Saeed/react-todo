import React, { useState } from 'react'
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';


function AddTodo() {

    let [inputItem, setInputItem] = useState("")
    let [todo, setTodo] = useState([])
    let [notificationMessage, setNotificationMessage] = useState("");
    let [isEditTodo, setIsEditTodo] = useState(null)

    let handleSubmit = (e) => {
        e.preventDefault();
        if (inputItem.trim()) {
            if (isEditTodo) {
                setTodo(todo.map((item) => (
                    item.id === isEditTodo ? { ...item, todo: inputItem } : item
                )))
                setNotificationMessage("Todo Item Updated")

                setTimeout(() => {
                    setNotificationMessage("")
                }, 2000);
                setIsEditTodo(null)

            } else {
                setTodo([...todo, { id: uuidv4(), todo: inputItem }])
            }
        }
        setInputItem("")
    }

    let removeTodo = (id) => {
        setTodo(todo.filter((itemTodo) => itemTodo.id !== id))
        setNotificationMessage("Todo Item deleted")

        setTimeout(() => {
            setNotificationMessage("")
        }, 2000);

    }
    let updateTodo = (item) => {

        setInputItem(item.todo)
        setIsEditTodo(item.id)


    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Todo"
                    onChange={(e) => setInputItem(e.target.value)}
                    value={inputItem}
                />
                <button type='submit'>{isEditTodo ? "Update Todo" : "Add Todo"}</button>
            </form>
            {notificationMessage && <div>{notificationMessage}</div>}
            <TodoItem todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </>

    )
}

export default AddTodo