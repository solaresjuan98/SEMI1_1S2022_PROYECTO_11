import React from 'react'

const arr = [1, 2, 3, 4, 5, 6];
export const NotesList = () => {
    return (
        <>
            <h4>My Notes</h4>
            {
                arr.map((el) => (
                    <div className="card mt-3" style={{ width: '100%' }} key={el}>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
