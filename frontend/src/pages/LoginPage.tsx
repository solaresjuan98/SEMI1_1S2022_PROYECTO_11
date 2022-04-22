import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';


export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const { formData, onChangeForm, isNotEmpty } = useForm({
    usuario: 'juan98',
    claveUsuario: '123456'
  });

  const { usuario, claveUsuario } = formData;


  const submitLogin = (ev: any) => {
    ev.preventDefault();

    // backend...
    login(usuario, claveUsuario);
    //console.log(ok)
    //return navigate('/home')

  }

  const allOk = (): boolean => {

    return (isNotEmpty(usuario) && isNotEmpty(claveUsuario)) ? true : false

  }

  return (
    <div className='center mt-5' style={{ width: '70vh' }}>

      <h2>Login page</h2>
      <form onSubmit={submitLogin}>
        <div className="form-group">
          <label className="form-label mt-1">Username</label>
          <input
            type="text"
            className="form-control"
            name="usuario"
            value={usuario}
            onChange={(ev) => onChangeForm(ev)}
          />
          {/* <div className="valid-feedback">Success! You've done it.</div> */}
        </div>
        <div className="form-group">
          <label className="form-label mt-1">Password</label>
          <input
            type="password"
            className="form-control"
            name="claveUsuario"
            value={claveUsuario}
            onChange={(ev) => onChangeForm(ev)}
          />
        </div>

        <div className="form-group d-grid gap-2 mt-3">
          <button className='btn btn-success' disabled={!allOk()}>Login</button>
        </div>

        <div className="form-group mt-1">

          <NavLink to="/auth/register">Create an account</NavLink>
        </div>

        {/* <pre>
          {JSON.stringify(formData, null, 4)}
        </pre> */}
      </form>
    </div>
  )
}
