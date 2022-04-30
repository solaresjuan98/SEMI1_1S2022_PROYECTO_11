import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';


const carreers =
  [
    'Ingenieria Civil',
    'Ingenieria Química',
    'Ingenieria Mecánica',
    'Ingenieria Eléctrica',
    'Ingenieria Eléctronica',
    'Ingenieria Industrial',
    'Ingenieria en Ciencias y Sistemas'
  ]

export const RegisterPage = () => {

  const { register } = useContext(AuthContext);

  const {
    formData,
    onChangeForm,
    onChangeFile,
    onChangeSelect,
    isNotEmpty } = useForm({
      nombreUsuario: '',
      carnetUsuario: '',
      carreraUsuario: '',
      claveUsuario: '',
      confirmarclaveUsuario: '',
      file: ''
    });

  const {
    nombreUsuario,
    carnetUsuario,
    carreraUsuario,
    claveUsuario,
    confirmarclaveUsuario, file } = formData;

  const allOk = (): boolean => {

    return (isNotEmpty(nombreUsuario) && isNotEmpty(carnetUsuario) && isNotEmpty(claveUsuario) && isNotEmpty(confirmarclaveUsuario)) ? true : false;

  }

  const confirmPasswords = (): boolean => {

    if ((claveUsuario === confirmarclaveUsuario) && isNotEmpty(claveUsuario) && isNotEmpty(confirmarclaveUsuario)) {

      return true
    }

    return false;

  }

  const onRegisterNewUser = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log(formData)



    await register(nombreUsuario, carnetUsuario, carreraUsuario, claveUsuario, file);

  }


  return (
    <div className='center mt-5' style={{ width: '70vh' }}>

      <h3>Register page</h3>
      <hr />
      <form onSubmit={onRegisterNewUser}>

        <div className="form-group">
          <label className="form-label mt-1">Name:</label>
          <input
            type="text"
            name='nombreUsuario'
            value={nombreUsuario}
            onChange={onChangeForm}
            className="form-control" />
          {/* <div className="valid-feedback">Success! You've done it.</div> */}
        </div>

        <div className="form-group">
          <label className="form-label mt-1">Carnet:</label>
          <input
            type="text"
            name='carnetUsuario'
            value={carnetUsuario}
            onChange={onChangeForm}
            className="form-control" />
          {/* <div className="invalid-feedback">Error</div> */}
        </div>

        <div className="form-group">
          <label className="form-label mt-1">Carreer:</label>
          <select
            multiple={false}
            className="form-select"
            //value={idAlbum}
            name="carreraUsuario"
            //onChange={(ev)=> {console.log(ev.target.children)}}
            onChange={(ev) => onChangeSelect(ev, 'carreraUsuario')}
          >
            <option selected>Select an album </option>
            {
              carreers.map((career, i) => (
                <option key={i} carreer-key={i}>{career}</option>
              ))
            }
          </select>


        </div>

        <div className="form-group">
          <label className="form-label mt-1">Password:</label>
          <input
            type="password"
            name='claveUsuario'
            value={claveUsuario}
            onChange={onChangeForm}
            className={`form-control ${confirmPasswords() ? 'is-valid' : 'is-invalid'} `} />
        </div>

        <div className="form-group">
          <label className="form-label mt-1">Repeat Password:</label>
          <input
            type="password"
            name='confirmarclaveUsuario'
            value={confirmarclaveUsuario}
            onChange={onChangeForm}
            className={`form-control ${confirmPasswords() ? 'is-valid' : 'is-invalid'} `} />
          <div className="valid-feedback">{confirmPasswords() ? 'Passwords match!' : ''}</div>
          <div className="invalid-feedback">Passwords must be equal.</div>
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

        <div className="form-group d-grid gap-2 mt-3">
          <button className='btn btn-success' disabled={!allOk()}>Create Account</button>
        </div>

        <div className="form-group mt-3">
          <NavLink to="/auth/login">Already registered? Login here</NavLink>
        </div>
      </form>
    </div>
  )
}
