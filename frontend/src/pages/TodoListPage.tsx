import React from 'react'
import { CreateTodo } from '../components/CreateTodo'
import { TaskCard } from '../components/TaskCard';
import { useTodos } from '../hooks/useTodos';

export const TodoListPage = () => {

  const { loadingTodos, userTodos } = useTodos();

  return (
    <div className='container-fluid float-container mt-5'>
      <h1>Todo list</h1>
      <hr />


      <div className="row">
        <div className="col-4 animate__animated animate__fadeInDown">
          <h3>Create new Todo</h3>
          {/*/* Create todo * */}
          <CreateTodo />
        </div>

        <div className="col-7 animate__animated animate__fadeInDown">
          <h3>My Todos</h3>

          {/* TODOS: */}
          {
            loadingTodos ? (
              <h3>Loading...</h3>
            ) : (
              userTodos.map((todo) => (
                <TaskCard todo={todo} />
              ))
            )
          }

        </div>
      </div>
    </div>
  )
}
