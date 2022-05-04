import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useAnalysis } from '../hooks/useAnalysis';
import { useForm } from '../hooks/useForm';

export const HomePage = () => {

  const { auth, updateUser } = useContext(AuthContext);

  const { formData, onChangeForm, onChangeFile } = useForm({
    nombreUsuario: auth.nombreUsuario,
    carnetUsuario: auth.carnetUsuario,
    file: '',
  });

  const { labelsResponse, loading } = useAnalysis();
  //console.log(auth);
  const onUpdateUser = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    //let fotoPerfil = formData.file;
    await updateUser(formData.nombreUsuario, formData.file);
  }

  return (

    <div className='container-fluid float-container mt-5'>
      <h1>Home Page</h1>
      <hr />

      <div className="row">
        <div className="col-6">
          <h2>My user</h2>
          <hr />

          {/** EDIT USER */}
          <form onSubmit={onUpdateUser} className="animate__animated animate__fadeInDown">
            <div className="form-group">
              <label className="form-label mt-1">Name:</label>
              <input
                //readOnly
                type="text"
                name='nombreUsuario'
                value={formData.nombreUsuario}
                onChange={onChangeForm}
                className="form-control" />
              {/* <div className="valid-feedback">Success! You've done it.</div> */}
            </div>

            <div className="form-group">
              <label className="form-label mt-1">Username:</label>
              <input
                type="text"
                name='carnetUsuario'
                readOnly
                value={auth.carnetUsuario}
                onChange={onChangeForm}
                className="form-control" />
              {/* <div className="invalid-feedback">Error</div> */}
            </div>

            <div className="form-group">
              <label className="form-label mt-1">Upload a photo</label>
              <input
                className="form-control"
                type="file"
                name="file"
                onChange={onChangeFile}
              />
            </div>

            {/* <div className="form-group">
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
              
            </div> */}
            <div className="form-group d-grid gap-2 mt-3">
              <button className='btn btn-success'>Update Account</button>
            </div>

          </form>
        </div>


        {/** PHOTO ANALYSIS */}
        <div className="col-6">
          <h2>Your photo analysys: </h2>
          <hr />

          <div className="mt-4 mb-4 p-3 d-flex justify-content-center animate__animated animate__fadeInDown">
            <div className="card p-4">
              <div className=" image d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-secondary">
                  <img src={`${(auth.fotoPerfil !== null) ? auth.fotoPerfil : 'https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-11.jpg'}`} alt="profile" height="100" width="100" />
                </button>
                <span className="name mt-3">{auth.nombreUsuario}</span>
                <span className="idd">@{auth.carnetUsuario}</span>

              </div>
            </div>
          </div>



          <div className='container mt-4' style={{ width: '100%' }}>
            <h5>Labels (AWS Rekognition) </h5>
            {

              (loading) ? <h5 className='animate__animated animate__flash'>Loading...</h5> : (

                labelsResponse.Labels?.map((label, i) => (
                  <pre className='animate__animated animate__backInUp' style={{
                    backgroundColor: '#ccc',
                    borderRadius: '10px',
                    padding: '10px'
                  }}>
                    {label.Name}
                    <ul className='animate__animated animate__backInDown'>
                      <li key={i}>
                        confidence: {label.Confidence}
                      </li>
                      {/**  PARENTS  */}
                      <b className='mt-2'>Parents:</b>
                      <ul>
                        {
                          label.Parents.map((parent, i) => (
                            <li key={i}>
                              {parent.Name}
                            </li>
                          ))
                        }
                      </ul>


                    </ul>
                  </pre>

                ))
              )
            }

          </div>


        </div>
      </div>

    </div>
  )
}
