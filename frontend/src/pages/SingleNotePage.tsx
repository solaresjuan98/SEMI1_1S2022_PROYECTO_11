import React from 'react'
import { UserNote } from '../helpers/interfaces';
import { Note } from '../interfaces/interfaces';

interface Props {
    onSelectNote: (note: UserNote) => void;
    note: UserNote;
}

export const SingleNotePage = ({ onSelectNote, note }: Props) => {

    return (
        <>

            <h3>{note.tituloNota}</h3>
            <hr />
            {/** Translate buttons */}
            <button className='btn btn-outline-dark' style={{ margin: '5px' }}>ES</button>
            <button className='btn btn-outline-dark' style={{ margin: '5px' }}>EN</button>
            <button className='btn btn-outline-dark' style={{ margin: '5px' }}>DE</button>
            <button className='btn btn-outline-dark' style={{ margin: '5px' }}>FR</button>

            <div className="card mt-4" style={{width: '100%'}}>
                <div className="card-body">
                    <p className='text-dark'>{note.contenidoNota}</p>
                </div>
            </div>



            <button className='btn btn-warning mt-4' onClick={() => onSelectNote(null!)}>Go back</button>
        </>
    )
}
