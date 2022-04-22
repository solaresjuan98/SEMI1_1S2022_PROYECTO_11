import React from 'react'
import { AuthProvider } from './context/AuthContext';
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage';
import { AppRouter } from './routes/AppRouter';

export const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>

    </>
  )
}
