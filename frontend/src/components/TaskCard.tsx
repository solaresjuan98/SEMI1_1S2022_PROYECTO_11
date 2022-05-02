import React from 'react'
import { UserTodo } from '../helpers/interfaces';
import { useTodos } from '../hooks/useTodos';

interface Props {
    todo: UserTodo;
}

export const TaskCard = ({ todo }: Props) => {

    const { deleteTodo, completeTodo } = useTodos();


    const onDeleteTodo = async (idTodo: number) => {

        await deleteTodo(idTodo);
    }

    const onCompleteTodo = async (idTodo: number) => {

        await completeTodo(idTodo);
    }

    return (
        <>
            <div className="card mt-3" style={{ width: '80%' }}>
                {
                    todo.completado ? (
                        <div className="card-header" style={{ textDecoration: 'line-through' }}>
                            {todo.tituloTodo}
                        </div>
                    ) : (
                        <div className="card-header">
                            {todo.tituloTodo}
                        </div>
                    )
                }

                <div className="card-body">

                    {
                        todo.completado ? (
                            <>
                                <p className='text-dark' style={{ textDecoration: 'line-through' }}>{todo.contenidoTodo}</p>  {"\n"}
                            </>

                        ) : (
                            <>
                                <p className='text-dark'>{todo.contenidoTodo}</p>  {"\n"}
                            </>

                        )
                    }



                    <div className="row">
                        <div className="col-6">
                            <button className='btn btn-outline-primary mt-1'
                                style={{ width: '100%' }}
                                onClick={() => onCompleteTodo(todo.idTodo)}
                            >
                                Mark as completed
                            </button>
                        </div>
                        <div className="col-6">
                            <button className='btn btn-outline-danger mt-1'
                                style={{ width: '100%' }}
                                onClick={() => onDeleteTodo(todo.idTodo)}
                            >
                                Delete
                            </button>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
