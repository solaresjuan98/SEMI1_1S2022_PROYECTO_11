import React from 'react'

export const WriteNote = () => {
    return (
        <>
            <h4>Write Note</h4>
            <div className="form-group">
                <label className="form-label mt-4">Example textarea</label>
                <textarea className="form-control" id="exampleTextarea" rows={16}></textarea>
                <div className="clearfix">
                    <button className='btn btn-outline-primary mt-2 float-right'>
                        Save note
                    </button>
                </div>
            </div>

        </>
    )
}
