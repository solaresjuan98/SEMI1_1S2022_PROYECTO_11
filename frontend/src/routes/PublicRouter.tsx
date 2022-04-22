import React from 'react';
import { Navigate } from 'react-router-dom';


interface Props {
    isAuthenticated: boolean;
    children: JSX.Element; // ReactComponent
}

export const PublicRoute = ({ isAuthenticated, children }: Props) => {
    return isAuthenticated ? children : <Navigate to="/auth/login" />;
};
