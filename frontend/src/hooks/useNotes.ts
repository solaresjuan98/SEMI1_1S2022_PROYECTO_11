import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { UserNote } from '../helpers/interfaces';
import Swal from 'sweetalert2';

export const useNotes = () => {

    const { auth } = useContext(AuthContext);

    const idUser = auth.uid;
    const [loadingUserNotes, setLoadingUserNotes] = useState(true);
    const [userNotes, setUserNotes] = useState<UserNote[]>([]);
    const [translation, setTranslation] = useState("")

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
                    //console.log(response.data);
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


    const deleteNote = async (idNota: number) => {


        await axios.delete(`${process.env.REACT_APP_BACKEND}/borrar_nota/${idNota}`)
            .then((response) => {
                if (response.data.correcto) {
                    console.log(response.data);
                    Swal.fire('Success', 'Your note has been deleted', 'success')
                } else {
                    Swal.fire('Error', "Your note couldn't be deleted ", 'error')
                }
            })
            .catch((error) => {
                console.log(error);
                Swal.fire('Error', "Your note couldn't be deleted ", 'error')
            })
    }


    const getTranslation = async (description: string, language: string) => {

        await axios.post(`${process.env.REACT_APP_BACKEND}/translate/${language}`, {
            description
        })
            .then((response) => {
                console.log(response.data)

                setTranslation(response.data.message.TranslatedText)
            })
            .catch((error) => {
                console.log(error);
            })

    }


    useEffect(() => {

        const interval = setInterval(() => {
            getUserNotes();
        }, 3500);

        getUserNotes();
        return () => clearInterval(interval);


    }, [])



    return {
        userNotes,
        loadingUserNotes,
        createNote,
        deleteNote,
        getTranslation,
        translation
    }
}
