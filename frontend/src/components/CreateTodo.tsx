import React from 'react'

export const CreateTodo = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Task
                </div>
                <div className="card-body">
                    <form>

                        <div className="form-group">
                            <label className="form-label mt-1">Todo title:</label>
                            <input
                                type="text"
                                autoComplete='off'
                                className="form-control"
                                name="usuario"
                            //!value={usuario}
                            //!onChange={(ev) => onChangeForm(ev)}
                            />
                        </div>

                        <div className="form-group d-grid gap-2 mt-3">
                            <button className='btn btn-outline-primary' disabled={true}>Save Todo</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
