
import React from 'react';

import { Routes, Route } from "react-router-dom"
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'


export const AuthRouter = () => {
    return (

        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <Routes>
                        {/* en AppRouter tenemos /* que va manejar las rutas anidadas */}
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="*" element={<h1>La página no existe</h1>} />
                    </Routes>
                </div>
            </div>
        </div>

    );
};
