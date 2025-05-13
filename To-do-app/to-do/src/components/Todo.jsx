import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

{/*Komponent Todo przyjmuje właściwość (prop) task, którą otrzymuje z rodzica (komponentu, który używa <Todo />)*/}
export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      {/*Wyświetla tekst zadania, które jest zawarte w obiekcie task*/}
      <p onClick={() => toggleComplete(task.id)} className={task.completed ? 'completed': "" }>{task.task}</p>
      <div>
        < FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
        < FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}
