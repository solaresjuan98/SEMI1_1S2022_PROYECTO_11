import React, { useState } from 'react'


export const useForm = <T>(initialState: T) => {

    const [formData, setFormData] = useState<T>(initialState);


    const onChangeForm = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = ev.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    const onChangeFile = async (ev: React.ChangeEvent<HTMLInputElement>) => {
        ev.preventDefault();
        const { name } = ev.target;


        // const img = ev.target.files![0];

        // const file = new FormData();
        // file.append("file", img);

        // await axios({
        //     method: "POST",
        //     url: `${baseURL}/subir_foto`,
        //     data: file,
        //     headers: {
        //         'Content-Type': `multipart/form-data;`
        //     }
        // })
        //     .then(function (response) {
        //         //handle success
        //         console.log(response);

        //         setFormData(prev => ({
        //             ...prev,
        //             [name]: response.data.image_url
        //         }))

        //     })
        //     .catch(function (response) {
        //         //handle error
        //         console.log(response);
        //     });

    }


    const isNotEmpty = (field: string): boolean => {

        return (field.trim().length > 0) ? true : false;
    }

    return {
        onChangeForm,
        isNotEmpty,
        onChangeFile,
        formData
    }


}
