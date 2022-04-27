import React, { useState } from 'react'
import { Suspense } from 'react';
import {
    // BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import { Note } from '../interfaces/interfaces';
import { SingleNotePage } from '../pages/SingleNotePage';

const arr = [1, 2, 3, 4, 5, 6];

// * notes
const notes = [
    {
        noteid: 1,
        title: 'Apuntes de mi clase de ingles',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus consequatur voluptatem cum sit repellendus asperiores sunt cupiditate? Incidunt tenetur est perspiciatis id magnam temporibus quis fugiat fuga animi reiciendis nobis hic inventore necessitatibus porro facere labore modi voluptates aliquam soluta nulla odio, natus excepturi. Enim nam, reiciendis aut pariatur eos incidunt necessitatibus fugiat cupiditate dolorem, commodi ab exercitationem! Voluptatem quo eveniet minima ab architecto iste, accusamus rem repellendus facilis nisi voluptatibus veniam provident nulla cum repellat saepe vel delectus pariatur placeat earum nobis magni! Aperiam ut voluptatem, asperiores aspernatur, impedit illum esse repellat distinctio explicabo delectus quidem aliquid! Esse.'
    },
    {
        noteid: 2,
        title: 'Borrador de tarea de lenguaje',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus consequatur voluptatem cum sit repellendus asperiores sunt cupiditate? Incidunt tenetur est perspiciatis id magnam temporibus quis fugiat fuga animi reiciendis nobis hic inventore necessitatibus porro facere labore modi voluptates aliquam soluta nulla odio, natus excepturi. Enim nam, reiciendis aut pariatur eos incidunt necessitatibus fugiat cupiditate dolorem, commodi ab exercitationem! Voluptatem quo eveniet minima ab architecto iste, accusamus rem repellendus facilis nisi voluptatibus veniam provident nulla cum repellat saepe vel delectus pariatur placeat earum nobis magni! Aperiam ut voluptatem, asperiores aspernatur, impedit illum esse repellat distinctio explicabo delectus quidem aliquid! Esse.'
    },
    {
        noteid: 3,
        title: 'Borrador de speech de exposición',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus consequatur voluptatem cum sit repellendus asperiores sunt cupiditate? Incidunt tenetur est perspiciatis id magnam temporibus quis fugiat fuga animi reiciendis nobis hic inventore necessitatibus porro facere labore modi voluptates aliquam soluta nulla odio, natus excepturi. Enim nam, reiciendis aut pariatur eos incidunt necessitatibus fugiat cupiditate dolorem, commodi ab exercitationem! Voluptatem quo eveniet minima ab architecto iste, accusamus rem repellendus facilis nisi voluptatibus veniam provident nulla cum repellat saepe vel delectus pariatur placeat earum nobis magni! Aperiam ut voluptatem, asperiores aspernatur, impedit illum esse repellat distinctio explicabo delectus quidem aliquid! Esse.'
    }
]
export const NotesList = () => {

    const [selectedNote, setSelectedNote] = useState<Note>();
    const [showSingleNote, setShowSingleNote] = useState(false);


    const onSelectNote = (note: Note) => {

        if(selectedNote) {
            setSelectedNote(null!)
        }else {
            setSelectedNote(note);
        }

        //

        
    }

    

    return (
        <>

            {
                (selectedNote) ? (
                    <SingleNotePage note={selectedNote} onSelectNote={onSelectNote}  />
                ) :
                    (

                        <>
                            <h4>My notes</h4>
                            {
                                notes.map((note, i) => (
                                    <div className="card mt-3" style={{ width: '100%' }} key={i}>
                                        <div className="card-body">
                                            <h4 className="card-title">{note.title}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <button className='btn btn-outline-primary' onClick={() => onSelectNote(note)}>Go to note</button>
                                            {/* <a href="#" className="card-link">Another link</a> */}
                                        </div>
                                    </div>
                                ))
                            }
                        </>


                    )
            }

            {/* {
                notes.map((note, i) => (
                    <div className="card mt-3" style={{ width: '100%' }} key={i}>
                        <div className="card-body">
                            <h4 className="card-title">{note.title}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className='btn btn-outline-primary' onClick={() => onSelectNote(note)}>Go to note</button>

                        </div>
                    </div>
                ))
            } */}
        </>
    )
}
