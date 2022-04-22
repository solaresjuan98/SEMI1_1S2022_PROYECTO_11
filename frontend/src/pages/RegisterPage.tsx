import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';


export const RegisterPage = () => {

  const { register } = useContext(AuthContext);

  const {
    formData,
    onChangeForm,
    onChangeFile,
    isNotEmpty } = useForm({
      nombreUsuario: '',
      usuario: '',
      claveUsuario: '',
      confirmarclaveUsuario: '',
      file: ''
    });

  const {
    nombreUsuario,
    usuario,
    claveUsuario,
    confirmarclaveUsuario, file } = formData;

  const allOk = (): boolean => {

    return (isNotEmpty(nombreUsuario) && isNotEmpty(usuario) && isNotEmpty(claveUsuario) && isNotEmpty(confirmarclaveUsuario)) ? true : false;

  }

  const confirmPasswords = (): boolean => {

    if ((claveUsuario === confirmarclaveUsuario) && isNotEmpty(claveUsuario) && isNotEmpty(confirmarclaveUsuario)) {

      return true
    }

    return false;

  }

  const onRegisterNewUser = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log(formData);
    await register(nombreUsuario, usuario, claveUsuario, file);

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
          <label className="form-label mt-1">Username:</label>
          <input
            type="text"
            name='usuario'
            value={usuario}
            onChange={onChangeForm}
            className="form-control" />
          {/* <div className="invalid-feedback">Error</div> */}
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
