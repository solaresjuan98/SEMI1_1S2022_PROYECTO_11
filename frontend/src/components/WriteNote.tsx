import React from 'react'
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useAnalysis } from '../hooks/useAnalysis';
import { useForm } from '../hooks/useForm';
import { useNotes } from '../hooks/useNotes';

let date = new Date().toLocaleDateString();
export const WriteNote = () => {


    // * image hook
    const { createNote } = useNotes();

    // * analysis hook
    const { getTextFromImage, textImage } = useAnalysis();

    const [uploadImage, setUploadImage] = useState(false);

    const { formData,
        onChangeForm,
        onChangeTextArea,
        isNotEmpty,
        onChangeFile } = useForm({
            contenidoNota: "",
            fechaNota: date,
            tituloNota: "",
            file: ""
        });

    const onToggleSwitch = () => {

        setUploadImage(!uploadImage)
    }

    const onCreateNote = async () => {


        await createNote(formData.contenidoNota, formData.fechaNota, formData.tituloNota)
    }

    // * Send text image
    const onCreateNoteImage = async () => {

        let contenidoNota = textImage;
        await createNote(contenidoNota, formData.fechaNota, formData.tituloNota)
    }

    const onConvertImage = async () => {

        await getTextFromImage(formData.file);
    }

    const allOk = (): boolean => {

        return (isNotEmpty(formData.tituloNota) && isNotEmpty(formData.contenidoNota)) ? true : false

    }

    return (
        <>
            <h4>Write Note</h4>

            {/** Convert image into a note */}
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={uploadImage} onChange={onToggleSwitch} />
                <label className="form-check-label">Image mode</label>
            </div>
            {
                uploadImage ? (
                    <>
                        <div className="form-label mt-4">
                            Note title
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            name="tituloNota"
                            value={formData.tituloNota}
                            onChange={(ev) => onChangeForm(ev)}
                        />
                        <div className="form-group">
                            <label className="form-label mt-4">Convert an image into text</label>
                            <input
                                className="form-control"
                                type="file"
                                name="file"
                                onChange={onChangeFile}
                            />
                        </div>

                        <div className="text-dark mt-5">
                            {textImage}
                        </div>

                        <button className='btn btn-outline-secondary mt-2 float-right'
                            onClick={onConvertImage}>
                            Get text
                        </button>

                        <button className='btn btn-outline-primary mt-2 float-right'
                            //disabled={!allOk()}
                            onClick={onCreateNoteImage}>
                            Save note
                        </button>

                    </>
                ) :
                    (
                        <>
                            <div className="form-group">
                                <div className="form-label mt-4">
                                    Note title
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="tituloNota"
                                    value={formData.tituloNota}
                                    onChange={(ev) => onChangeForm(ev)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label mt-4">Note content</label>
                                <textarea className="form-control"
                                    id="exampleTextarea"
                                    name='contenidoNota'
                                    value={formData.contenidoNota}
                                    onChange={onChangeTextArea}
                                    rows={10}
                                >
                                </textarea>
                                <div className="clearfix">
                                    <button className='btn btn-outline-primary mt-2 float-right'
                                        disabled={!allOk()}
                                        onClick={onCreateNote}>
                                        Save note
                                    </button>
                                </div>
                            </div>
                        </>


                    )
            }


        </>
    )
}
function isNotEmpty(carnetUsuario: any) {
    throw new Error('Function not implemented.');
}

