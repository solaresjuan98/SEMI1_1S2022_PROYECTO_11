import React from 'react'
import { useState } from 'react';

export const WriteNote = () => {

    const [uploadImage, setUploadImage] = useState(false);

    const onToggleSwitch = () => {

        setUploadImage(!uploadImage)
    }

    return (
        <>
            <h4>Write Note</h4>
            {/** Convert image into a note */}
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={uploadImage} onClick={onToggleSwitch} />
                <label className="form-check-label">Checked switch checkbox input</label>
            </div>
            {
                uploadImage ? (
                    <>
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
                        <div className="form-group">
                            <label className="form-label mt-4">write your note</label>
                            <textarea className="form-control" id="exampleTextarea" rows={16}></textarea>
                            <div className="clearfix">
                                <button className='btn btn-outline-primary mt-2 float-right'>
                                    Save note
                                </button>
                            </div>
                        </div>
                    )
            }


        </>
    )
}
