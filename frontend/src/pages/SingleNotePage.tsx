import React from 'react'
import { UserNote } from '../helpers/interfaces';
import { useNotes } from '../hooks/useNotes';
import { Note } from '../interfaces/interfaces';

interface Props {
    onSelectNote: (note: UserNote) => void;
    note: UserNote;
}



export const SingleNotePage = ({ onSelectNote, note }: Props) => {

    const { translation, getTranslation } = useNotes()

    const onTranslateNote = async (description: string, language: 'en' | 'es' | 'fr' | 'de') => {

        await getTranslation(description, language);
    }

    return (
        <>

            <h3>{note.tituloNota}</h3>
            <hr />
            {/** Translate buttons */}
            <button className='btn btn-outline-dark'
                onClick={() => onTranslateNote(note.contenidoNota, 'es')}
                style={{ margin: '5px' }}>
                ES
            </button>
            <button className='btn btn-outline-dark'
                onClick={() => onTranslateNote(note.contenidoNota, 'en')}
                style={{ margin: '5px' }}>
                EN
            </button>
            <button className='btn btn-outline-dark'
                onClick={() => onTranslateNote(note.contenidoNota, 'de')}
                style={{ margin: '5px' }}>
                DE
            </button>
            <button className='btn btn-outline-dark'
                onClick={() => onTranslateNote(note.contenidoNota, 'fr')}
                style={{ margin: '5px' }}>
                FR
            </button>

            <div className="card mt-4" style={{ width: '100%' }}>
                <div className="card-body">
                    <p className='text-dark'>{note.contenidoNota}</p>
                </div>
                <div className="card-body">
                    <small>Translation</small>
                    <p className='text-dark'>{translation}</p>
                </div>
            </div>



            <button className='btn btn-warning mt-4' onClick={() => onSelectNote(null!)}>Go back</button>
        </>
    )
}
