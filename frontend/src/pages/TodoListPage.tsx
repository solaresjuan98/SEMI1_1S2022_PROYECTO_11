import React from 'react'
import { CreateTodo } from '../components/CreateTodo'
import { TaskCard } from '../components/TaskCard';

export const TodoListPage = () => {
  return (
    <div className='container float-container mt-5'>
      <h1>Todo list</h1>
      <hr />


      <div className="row">
        <div className="col-4">
          <h3>Create new Todo</h3>
          {/*/* Create todo * */}
          <CreateTodo />
        </div>

        <div className="col-8">
          <h3>My Todos</h3>

          {/* TODOS: */}
          <TaskCard />
        </div>
      </div>
    </div>
  )
}
