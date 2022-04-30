import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

export const HomePage = () => {

  const { auth } = useContext(AuthContext);

  console.log(auth);
  const onUpdateUser = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  }

  return (
    <div className='container float-container mt-5'>
      <h1>Home Page</h1>
      <hr />

      <div className="row">
        <div className="col-6">
          <h2>My user</h2>
          <hr />


          <form onSubmit={onUpdateUser} className="animate__animated animate__fadeInDown">
            <div className="form-group">
              <label className="form-label mt-1">Name:</label>
              <input
                readOnly
                type="text"
                name='nombreUsuario'
                //value={nombreUsuario}
                //onChange={onChangeForm}
                className="form-control" />
              {/* <div className="valid-feedback">Success! You've done it.</div> */}
            </div>

            <div className="form-group">
              <label className="form-label mt-1">Username:</label>
              <input
                type="text"
                name='usuario'
                //value={usuario}
                //onChange={onChangeForm}
                className="form-control" />
              {/* <div className="invalid-feedback">Error</div> */}
            </div>

            <div className="form-group">
              <label className="form-label mt-1">Upload a photo</label>
              <input
                className="form-control"
                type="file"
                name="file"
                //onChange={onChangeFile}
              />
            </div>

            <div className="form-group">
              <label className="form-label mt-1">Enter your password before update your account:</label>
              <input
                type="password"
                name='claveUsuario'
                //value={claveUsuario}
                //onChange={onChangeForm}
                className='form-control'
                //className={`form-control ${confimedBeforeUpdate ? 'is-valid' : 'is-invalid'} `} 
                />
              <div className="invalid-feedback">Enter your password before update.</div>
              {/* <div className="valid-feedback">Password confirmed</div> */}
            </div>
            <div className="form-group d-grid gap-2 mt-3">
              <button className='btn btn-success' disabled={true}>Update Account</button>
            </div>

          </form>
        </div>
        <div className="col-6">
          <h2>Other options</h2>
          <hr />
        </div>
      </div>

    </div>
  )
}
