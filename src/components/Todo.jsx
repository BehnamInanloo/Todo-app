import { FaTrash } from 'react-icons/fa'

const Todo = ({ title, text, id, todoList, setTodoList }) => {

  const handleDeleteTodo = () => {
    const filteredTodos = todoList.filter((item) => item.id !== id)
    setTodoList(filteredTodos)
  }

  return (
    <div className='mb-4 mx-auto shadow-sm todo-box'>
      <div className='d-flex justify-content-between align-items-center px-3 py-1 w-100 rounded-top todo-title'>
        <h3 className='text-white mb-0'>{title}</h3>
        <button className='btn pe-0' title='Delete todo'
          onClick={handleDeleteTodo}
        >
          <FaTrash color='red' />
        </button>
      </div>
      <p className='p-3 mb-0 bg-white rounded-bottom'>
        {text}
      </p>
    </div>
  )
}
export default Todo