
import React, { useState, createContext } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';

interface initState {
  uid: null;
  checking: boolean;
  logged: boolean;
  nombreUsuario: string;
  carnetUsuario: string;
  carreraUsuario: string;
  fotoPerfil: string;
}

interface IContextProps {
  auth: initState;
  login: (carnetUsuario: string, claveUsuario: string) => Promise<boolean>
  logout: () => boolean;
  register: (nombreUsuario: string, carnetUsuario: string, carreraUsuario: string, claveUsuario: string, file: string) => Promise<void>
}
export const AuthContext = createContext({} as IContextProps);

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  nombreUsuario: '',
  carnetUsuario: '',
  carreraUsuario: '',
  fotoPerfil: '',
}

export const AuthProvider = ({ children }: any) => {

  const [auth, setAuth] = useState(initialState);


  const register = async (nombreUsuario: string, carnetUsuario: string, carreraUsuario: string, claveUsuario: string, file: string) => {

    await axios.post(`${process.env.REACT_APP_BACKEND}/registrar_usuario`, {
      nombreUsuario,
      carnetUsuario,
      carreraUsuario,
      claveUsuario,
      fotoPerfil: file
    }).then((response) => {

      console.log(response.data)
      if (response.data.correcto) {
        Swal.fire('Success!', 'Your user has been created succesfully', 'success')
      } else {
        Swal.fire('Error', 'The username is already used by another user', 'error')
      }

    })
      .catch((error) => {
        console.log(error)
      })

  }

  const login = async (carnetUsuario: string, claveUsuario: string) => {

    // backend....
    await axios.post(`${process.env.REACT_APP_BACKEND}/login`, { carnetUsuario, claveUsuario })
      .then((response) => {

        const { usuario, status_login } = response.data;

        if (usuario && status_login) {

          setAuth({
            uid: usuario.idUsuario,
            nombreUsuario: usuario.nombreUsuario,
            carnetUsuario: usuario.carnetUsuario,
            carreraUsuario: usuario.carreraUsuario,
            fotoPerfil: usuario.fotoPerfil,
            logged: true,
            checking: false
          })

        } else {
          Swal.fire('Error', 'Credentials not valid', 'error')
        }

      })
      .catch((error) => {
        console.log(error)
        Swal.fire('Error', 'Credentials not valid', 'error')
        // change
        setAuth({
          ...initialState,
          logged: false
        });
      })




    return auth.logged;

  }

  const logout = () => {


    // backend....

    setAuth({
      ...initialState,
      logged: false
    })

    return auth.logged;

  }




  return (
    <AuthContext.Provider value={{
      auth,
      register,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
