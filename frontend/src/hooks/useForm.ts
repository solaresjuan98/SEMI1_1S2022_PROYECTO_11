import React, { useState } from 'react'
import S3FileUpload from 'react-s3'
import { S3config } from '../helpers/s3';


var imgName = '';

export const useForm = <T>(initialState: T) => {

    const [formData, setFormData] = useState<T>(initialState);


    const onChangeForm = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = ev.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const onChangeSelect = (ev: React.ChangeEvent<HTMLSelectElement>, field: string) => {

        //const { value } = ev.target;
        const index = ev.target.options.selectedIndex
        const content = ev.target.value;
        //console.log(field, content)
        //console.log(ev.target.options[index].getAttribute('carreer-key'))
        //console.log()
        setFormData({
            ...formData,
            //[field]: ev.target.options[index].getAttribute('carreer-key')
            [field]: content
        })

    }


    const onChangeTextArea = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = ev.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

    }

    const onChangeFile = async (ev: React.ChangeEvent<HTMLInputElement>) => {
        ev.preventDefault();
        const { name } = ev.target;

        const img = ev.target.files![0];

        imgName = img.name
        const file = new FormData();
        file.append("file", img);

        console.log(S3config)
        S3FileUpload.uploadFile(img, S3config)
            .then((data: { location: any; }) => {
                console.log(data.location)
                setFormData(prev => ({
                    ...prev,
                    [name]: data.location
                }))


            })
            .catch((err: any) => {
                console.log(err);
            })

    }


    const isNotEmpty = (field: string): boolean => {

        return (field.trim().length > 0) ? true : false;
    }

    return {
        onChangeForm,
        isNotEmpty,
        onChangeFile,
        onChangeTextArea,
        onChangeSelect,
        formData
    }


}
