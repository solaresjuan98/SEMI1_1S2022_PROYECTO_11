import React, { useState } from 'react'
import { NotesList } from '../components/NotesList';
import { WriteNote } from '../components/WriteNote';



export const NotesPage = () => {

    const [showNotes, setShowNotes] = useState(true);


    const onShowNotes = () => {

        setShowNotes(!showNotes);
    }

    return (
        <div className='container-fluid float-container mt-5'>
            <h1>Notes</h1>

            <button className='btn btn-outline-primary' onClick={onShowNotes}>

                {showNotes ? 'Add note' : 'Show notes'}
                <i className="bi bi-clipboard2-plus"></i>
            </button>
            <hr />

            <div className="mt-4" style={{ margin: '20px' }}>
                {
                    showNotes ? (
                        <NotesList />
                    ) : (
                        
                        <WriteNote />
                    )
                }
            </div>
        </div>
    )
}
