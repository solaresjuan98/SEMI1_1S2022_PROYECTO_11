import React from 'react'
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { useNotes } from '../hooks/useNotes';

let date = new Date().toLocaleDateString();
export const WriteNote = () => {


    // * image hook
    const { createNote } = useNotes();

    const [uploadImage, setUploadImage] = useState(false);

    const { formData, onChangeForm, onChangeTextArea, isNotEmpty } = useForm({
        contenidoNota: "",
        fechaNota: date,
        tituloNota: ""
    });

    const onToggleSwitch = () => {

        setUploadImage(!uploadImage)
    }

    const onCreateNote = async () => {


        await createNote(formData.contenidoNota, formData.fechaNota, formData.tituloNota)
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
                            //onChange={onChangeFile}
                            />
                        </div>

                        <div className="text-dark mt-5">
                            Text
                        </div>
                        <button className='btn btn-outline-primary mt-2 float-right'>
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

