import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { UserTodo } from '../helpers/interfaces';
import Swal from 'sweetalert2';

export const useTodos = () => {

    const { auth } = useContext(AuthContext);

    const [userTodos, setUserTodos] = useState<UserTodo[]>([]);
    const [loadingTodos, setLoadingTodos] = useState(true);

    const getUserTodos = async () => {

        await axios.get(`${process.env.REACT_APP_BACKEND}/todos/${auth.uid}`)
            .then((response) => {

                if (response.data.correcto) {

                    setUserTodos(response.data.userTodos);
                    setLoadingTodos(false);
                }

            })
            .catch((error) => {
                console.log(error)
            })


    }

    const createTodo = async (tituloTodo: string, contenidoTodo: string, completado: number) => {

        let idUsuario = auth.uid;

        await axios.post(`${process.env.REACT_APP_BACKEND}/agregar_todo`, {
            idUsuario,
            tituloTodo,
            contenidoTodo,
            completado
        })
            .then((response) => {

                if (response.data.correcto) {

                    Swal.fire('Success!', 'Todo saved', 'success')
                } else {
                    Swal.fire('Error!', 'Todo not saved', 'error')
                }

            })
            .catch((error) => {
                console.log(error);
                Swal.fire('Error!', 'Todo not saved', 'error')
            })
    }


    const deleteTodo = async (idTodo: number) => {


        await axios.delete(`${process.env.REACT_APP_BACKEND}/borrar_todo/${idTodo}`)
            .then((response) => {

                if (response.data.correcto) {
                    Swal.fire('Deleted', 'Todo deleted', 'info')
                } else {
                    Swal.fire('Error', 'Todo not deleted', 'error')
                }

            })
            .catch((error) => {
                console.log(error)
                Swal.fire('Error', 'Todo not deleted', 'error')
            })
    }

    const completeTodo = async (idTodo: number) => {

        await axios.post(`${process.env.REACT_APP_BACKEND}/complete_todo/${idTodo}`)
            .then((response) => {

                if (response.data.correcto) {
                    Swal.fire('Completed', 'Todo completed', 'info')
                } else {
                    Swal.fire('Error', 'Todo not completed', 'error')
                }

            })
            .catch((error) => {
                console.log(error)
                Swal.fire('Error', 'Todo not completed', 'error')
            })

    }

    useEffect(() => {


        const interval = setInterval(() => {
            getUserTodos();
        }, 3500);

        getUserTodos();
        return () => clearInterval(interval);


    }, [loadingTodos])


    return {
        userTodos,
        loadingTodos,
        createTodo,
        deleteTodo,
        completeTodo
    }
}
