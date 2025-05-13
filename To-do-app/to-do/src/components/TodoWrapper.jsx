import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4} from 'uuid'
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  {/*Funkcja addTodo bierze 'todo', które jest 'value' z komponentu TodoForm*/}
  const addTodo = todo => {
    {/*Trzy kropki robią kopię todos. 
    "uuidv4() generuje nowy, unikalny identyfikator*/}
    setTodos([...todos , {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos)
  } 

  const toggleComplete = id => {
    {/*Warunek ? Jak spełniony : jeśli nie spełniony*/}
    setTodos(todos.map(todo => todo.id === id ?{...
      todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = id => {
    {/*Jeśli id zadania nie jest równe id które podajemy, chcemy żeby zwróciło tą wartość
      Czyli usuwamy zadanie o id równym id, które podaliśmy */}
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, task, isEditing: !todo.isEditing
    }: todo
  ))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Get Thing Done!</h1>
      {/*Potrzebowaliśmy przekazać 'value' z komponentu TodoForm. */}
      <TodoForm addTodo={addTodo}/>
      {/*Wyświetlanie listy todo. 
      Map() służy do iterowania przez tablicę.
      obiekt todo, jest przekazywany z jego indeksem
      Dla każdego elementu tablicy todos tworzony jest komponent Todo
      task={todo}: Przekazuje cały obiekt todo jako właściwość (prop) task
      key={index}: Jest to specjalna właściwość w React, którą przypisuje się unikalny klucz do każdego elementu w liście.*/}
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo task={todo} key={index} 
          toggleComplete={toggleComplete} deleteTodo={deleteTodo}
          editTodo={editTodo} />
        )
       
      ))}
    </div>
  )
}
