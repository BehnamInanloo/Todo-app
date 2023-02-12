import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TypeTodo = ({ setTodoList, todoList }) => {

  const [newTodo, setNewTodo] = useState({
    title: '',
    text: '',
    id: 0
  })

  const addNewTodo = () => {
    if (newTodo.title) {
      setTodoList([...todoList, newTodo])
      setNewTodo({
        title: '',
        text: '',
        id: 0
      })
    }
  }
  return (
    <div className='d-flex flex-column align-items-center text-white
      type-todo-box'>
      <h2 className='mb-2'>Todo List By Behnam Inanloo</h2>
      <input type='text' placeholder='Type your Title' className='form-control
        mb-2 shadow-sm' value={newTodo.title} onChange={(event) => setNewTodo(
        {
          ...newTodo,
          title: event.target.value,
          id: uuidv4()
        })
        } />
      <textarea placeholder='start typing here...' className='form-control mb-2
        shadow-sm' value={newTodo.text} onChange={(event) => setNewTodo(
        {
          ...newTodo,
          text: event.target.value
        })
        }></textarea>
      <button className='btn w-100 border-0 shadow' onClick={addNewTodo}>
        Submit Todo
      </button>
    </div>
  )
}
export default TypeTodo