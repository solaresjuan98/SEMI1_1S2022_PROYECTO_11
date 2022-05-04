import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Topic } from '../helpers/interfaces';
import Swal from 'sweetalert2';


export const useTopics = () => {
    
    const [loadingselectResponse, setLoadingselectResponse] = useState(true);
    const [selectResponse, setselectResponse] = useState<Topic[]>([])

    const getTopics = async () => {

        await axios.get("https://9fu71mmg4k.execute-api.us-east-1.amazonaws.com/primera/topics")
            .then((response) => {
                //console.log(response.data);
                setselectResponse(response.data);
                setLoadingselectResponse(false);
                
            })
            .catch((error) => {
                console.log(error);
                setLoadingselectResponse(true);
            })


    }

    const sendEmail = async (message: string, subject: string, arn: any) => {
        //console.log(message)
        //console.log(subject)

       await axios.post("https://9fu71mmg4k.execute-api.us-east-1.amazonaws.com/primera/send", {
            message:message,
            subject:subject,
            topicarn:arn,
        })
            .then((response) => {
                //console.log(response)
                Swal.fire('Success', 'El email se ha enviado correctamente', 'success')

                /*if (response.data.correcto) {
                    //console.log(response.data);
                    Swal.fire('Success', 'El email se ha enviado correctamente', 'success')
                } else {
                    Swal.fire('Error', "Error al enviar el email ", 'error')
                }*/
            })
            .catch((error) => {
                Swal.fire('Error', "Error al enviar el email ", 'error')
                console.log(error);
            })
    }

    const suscribetopic = async (email: string, arn: any) => {
        //console.log(message)
        //console.log(subject)

       await axios.post("https://9fu71mmg4k.execute-api.us-east-1.amazonaws.com/primera/suscribe", {
            email,
            topicarn:arn,
        })
            .then((response) => {
                //console.log(response)
                Swal.fire('Success', 'Se ha suscrito al topic ' + arn.split(":")[5] +' correctamente', 'success')

                /*if (response.data.correcto) {
                    //console.log(response.data);
                    Swal.fire('Success', 'El email se ha enviado correctamente', 'success')
                } else {
                    Swal.fire('Error', "Error al enviar el email ", 'error')
                }*/
            })
            .catch((error) => {
                Swal.fire('Error', "Error al realizar la suscripcion ", 'error')
                console.log(error);
            })
    }

    const newtopic = async (topicname: string) => {
        //console.log(message)
        //console.log(subject)

       await axios.post("https://9fu71mmg4k.execute-api.us-east-1.amazonaws.com/primera/createtopic", {
            topicname
        })
            .then((response) => {
                //console.log(response)
                Swal.fire('Success', 'Se ha creado el nuevo tema', 'success')

                /*if (response.data.correcto) {
                    //console.log(response.data);
                    Swal.fire('Success', 'El email se ha enviado correctamente', 'success')
                } else {
                    Swal.fire('Error', "Error al enviar el email ", 'error')
                }*/
            })
            .catch((error) => {
                Swal.fire('Error', "Error al crear el tema ", 'error')
                console.log(error);
            })
    }

    useEffect(() => {
        getTopics();
        //getAlbumLabels();
    }, [])


    return {
        selectResponse,
        loadingselectResponse,
        sendEmail,
        suscribetopic,
        newtopic
    }
}
