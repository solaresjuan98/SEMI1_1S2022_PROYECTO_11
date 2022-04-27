import React from 'react'

export const TaskCard = () => {
    return (
        <>
            <div className="card" style={{ width: '80%' }}>
                <div className="card-header">
                    Task id#2323
                </div>
                <div className="card-body">
                    <p className='text-dark'>this is a task</p>  {"\n"}

                    <div className="row">
                        <div className="col-6">
                            <button className='btn btn-outline-primary mt-1'
                                style={{ width: '100%' }}
                            >
                                Mark as completed
                            </button>
                        </div>
                        <div className="col-6">
                            <button className='btn btn-outline-danger mt-1'
                                style={{ width: '100%' }}
                            >
                                Delete
                            </button>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
