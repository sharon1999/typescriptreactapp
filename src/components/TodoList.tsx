import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
interface Props{
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList = ({todos,setTodos}:Props) => {
  return (
    <div className='todo__list'>
        {todos.map((todo)=><SingleTodo
            todo={todo}
            key = {todo.id}
            todos={todos}
            setTodos={setTodos}
        />)}
    </div>
  )
}

export default TodoList