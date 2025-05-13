import React, {useState} from 'react'

{/*w nawiasie {addTodo} dodane po to aby przekazać zmienną do komponentu TodoWrapper*/}
export const TodoForm = ({addTodo}) => {

  {/*Utworzenie zmiennej 'value', do której wartość jest przypisywana poprzez metodę podaną obok*/}
  const [value, setValue] = useState("")

  {/*Metoda obsługi formularza. preventDefault() zatrzymuje domyślne działanie on submit (czyli np. odświeżenie strony)*/}
  const handleSubmit = e => {
    e.preventDefault();
    {/*Przekazanie zmiennej do komponentu TodoWrapper*/}
    addTodo(value)
    {/*Wyczyszczenie formularza, po tym jak już coś prześlemy*/}
    setValue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
    {/*onChange=[...] Podczas jakielkolwiek zmiany tekstu/stanu tego inputa uruchomi funkcję setValue do której przesyłamy wartość obecnego celu, czyli tego inputa*/}
    <input type="text" className="todo-input" value={value} placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)} />
    <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
