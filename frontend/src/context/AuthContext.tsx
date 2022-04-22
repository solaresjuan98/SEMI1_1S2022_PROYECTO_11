
import React, { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

// interfaces
import { UserLogin } from '../interfaces/interfaces';

interface initState {
  uid: null;
  checking: boolean;
  logged: boolean;
  name: null;
  email: null;
}

interface IContextProps {
  auth: initState;
  login: (username: string, password: string) => boolean;
  logout: () => boolean;
  register: (nombreUsuario: string, usuario: string, claveUsuario: string, file: string) => Promise<void>
}
export const AuthContext = createContext({} as IContextProps);

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null
}

export const AuthProvider = ({ children }: any) => {

  const [auth, setAuth] = useState(initialState);


  const register = async (nombreUsuario: string, usuario: string, claveUsuario: string, file: string) => {



  }

  const login = (username: string, password: string) => {

    // backend....

    // change
    setAuth({
      ...initialState,
      logged: true
    });
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
