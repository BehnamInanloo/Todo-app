import { useState } from 'react'
import TypeTodo from './components/TypeTodo'
import Todo from './components/Todo'

const App = () => {

  const [todoList, setTodoList] = useState([
    { title: 'Behnam Inanloo', text: 'front-end developer', time: '0:00', date: '19/2/2021', id: 0 }
  ])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 my-5 my-md-0'>
          <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
            <TypeTodo setTodoList={setTodoList} todoList={todoList} />
          </div>
        </div>
        <div className='col-md-6 d-flex align-items-center 
            justify-content-center mb-5 mb-md-0 todo-main-box'>
          <div className='w-100 todo-boxes'>
            {todoList.map((item) => (
              <Todo title={item.title} text={item.text} time={item.time} date={item.date} key={item.id}
                setTodoList={setTodoList} todoList={todoList} id={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default App