import React from 'react'
import { Note } from '../interfaces/interfaces';

interface Props {
    onSelectNote: (note: Note) => void;
    note: Note;
}

export const SingleNotePage = ({ onSelectNote, note }: Props) => {

    return (
        <>

            <h3>{note.title}</h3>
            <hr />
            {/** Translate buttons */}
            <button className='btn btn-outline-dark' style={{margin: '5px'}}>ES</button>
            <button className='btn btn-outline-dark' style={{margin: '5px'}}>EN</button>
            <button className='btn btn-outline-dark' style={{margin: '5px'}}>DE</button>
            <button className='btn btn-outline-dark' style={{margin: '5px'}}>FR</button>

            <p>{note.text}</p>
            
            <button className='btn btn-warning' onClick={() => onSelectNote(null!)}>Go back</button>
        </>
    )
}
