import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { UserNote } from '../helpers/interfaces';
import Swal from 'sweetalert2';

export const useNotes = () => {

    const { auth } = useContext(AuthContext);

    const idUser = auth.uid;
    const [loadingUserNotes, setLoadingUserNotes] = useState(true);
    const [userNotes, setUserNotes] = useState<UserNote[]>([])

    const getUserNotes = async () => {

        await axios.get(`${process.env.REACT_APP_BACKEND}/notes/${idUser}`)
            .then((response) => {
                ////console.log(response.data.userNotes);
                setUserNotes(response.data.userNotes)
                setLoadingUserNotes(false);
            })
            .catch((error) => {
                console.log(error);
                setLoadingUserNotes(true)
            })


    }


    const createNote = async (contenidoNota: string, fechaNota: string, tituloNota: string) => {

        await axios.post(`${process.env.REACT_APP_BACKEND}/agregar_nota`, {
            idUsuario: auth.uid,
            contenidoNota,
            fechaNota,
            tituloNota
        })
            .then((response) => {


                if (response.data.correcto) {
                    console.log(response.data);
                    Swal.fire('Success', 'Your user has been created succesfully', 'success')
                } else {
                    Swal.fire('Error', "Your note couldn't be created ", 'error')
                }
            })
            .catch((error) => {
                Swal.fire('Error', "Your note couldn't be created ", 'error')
                console.log(error);
            })
    }


    useEffect(() => {

        getUserNotes();

    }, [])



    return {
        userNotes,
        loadingUserNotes,
        createNote
    }
}
