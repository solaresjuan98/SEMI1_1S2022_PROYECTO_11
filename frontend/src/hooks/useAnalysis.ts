import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
// import { baseURL } from '../helpers/apiurl';
import { AuthContext } from '../context/AuthContext';
import { Detection } from '../helpers/interfaces';
// import { LabelResponse, Detection } from '../interfaces/interfaces';

export const useAnalysis = () => {

    const { auth } = useContext(AuthContext);
    const { fotoPerfil } = auth;

    const [loading, setLoading] = useState(true);
    const [labelsResponse, setLabelsResponse] = useState<Detection>({})
    const [albumLabelsResp, setAlbumLabelsResp] = useState<Detection>({});

    // * Text from image
    const [textImage, setTextImage] = useState("");
    const [loadingTextImage, setLoadingTextImage] = useState(true);

    const getPhotoLabels = async () => {

        let partir = fotoPerfil.split('/')
        let image = partir[3]
        //console.log(image)
        await axios.post(`${process.env.REACT_APP_BACKEND}/get_labels/`, { image })
            .then((res) => {
                //console.log(res.data.detection)

                setLabelsResponse(res.data.detection);
                setLoading(false);

            })
            .catch((err) => {
                console.error(err);
            })

    }


    const getTextFromImage = async (photoUrl: string) => {

        let partir = photoUrl.split('/')
        let image = partir[3];

        await axios.post(`${process.env.REACT_APP_BACKEND}/get_photo_text`, {
            photo: image
        }).then((response) => {

            setTextImage(response.data.salida);
            setLoadingTextImage(false);

        }).catch((err) => {
            console.log(err);
            setLoadingTextImage(true);
        })

    }


    useEffect(() => {
        getPhotoLabels();
        //getAlbumLabels();
    }, [])


    return {
        getTextFromImage,
        textImage,
        labelsResponse,
        albumLabelsResp,
        loading
    }

}
