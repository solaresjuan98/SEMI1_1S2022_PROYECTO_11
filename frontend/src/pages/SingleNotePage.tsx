import React, { useState } from 'react'
import { UserNote } from '../helpers/interfaces';
import { useNotes } from '../hooks/useNotes';
import { Note } from '../interfaces/interfaces';
import { NavLink } from 'react-router-dom';

interface Props {
    onSelectNote: (note: UserNote) => void;
    note: UserNote;
}



export const SingleNotePage = ({ onSelectNote, note }: Props) => {

    const { loadingAudio, audioLink, translation, getTranslation, getAudioNote } = useNotes();

    const [showAudio, setShowAudio] = useState(false);

    const onTranslateNote = async (description: string, language: 'en' | 'es' | 'fr' | 'de') => {

        await getTranslation(description, language);
        //await getAudioNote(description);

    }

    const onGetTextAudio = async (description: string) => {


        await getAudioNote(description);


        if (!loadingAudio) {
            setTimeout(() => {
                console.log('Listo');
                setShowAudio(true);
            }, 10000)

        }


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

            <button className='btn btn-outline-dark'
                onClick={() => onGetTextAudio(note.contenidoNota)}
                style={{ margin: '5px' }}>
                Get Audio
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

            {

                (!loadingAudio && showAudio) &&
                (

                    <>
                        <div className="card mt-2">
                            <div className="card-body">
                                <audio controls preload="auto" id="audio_player">
                                    <source src={audioLink} type="audio/mpeg" />

                                </audio>
                            </div>
                        </div>
                        <a href={audioLink}>Audiolink</a> <br />
                        {/* <small>{audioLink}</small> */}

                    </>

                )

                // (showAudio) && (

                //     <>
                //         <div className="card mt-2">
                //             <div className="card-body">
                //                 <audio controls preload="auto" id="audio_player">
                //                     <source src={audioLink} type="audio/mpeg" />

                //                 </audio>
                //             </div>
                //         </div>
                //         <a href={audioLink}>Audiolink</a> <br />
                //         <small>{audioLink}</small>

                //     </>

                // )
            }

        </>
    )
}
