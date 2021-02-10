import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/Todo.module.css';

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState('');

    const onTodoChangeHandle = (event) => {
        const { value } = event.target;
        setCurrentTodo(value);
    }

    const onTodoAddHandle = () => {
        setTodos(prevValue => [...prevValue, currentTodo])
    }

    const onTodoDeleteHandle = (todoText) => {
        setTodos(prevValue => prevValue.filter(todo => todo !== todoText));
    }

    return (
        <div className={ styles.todoContainer }>
            <h1>Todo list</h1>
            <input placeholder="New todo description" value={ currentTodo } onChange={ onTodoChangeHandle }/>
            <button onClick={ onTodoAddHandle }>Add</button>
            <br/>
            <ul>
                {
                    todos.map((todo, index) =>
                        <li key={ `${ index }${ todo }` } onClick={ () => onTodoDeleteHandle(todo) }>{ todo }</li>)
                }
            </ul>
            <Link href="/">
                <button>Go back to index</button>
            </Link>
        </div>
    )
}

export default Todo;