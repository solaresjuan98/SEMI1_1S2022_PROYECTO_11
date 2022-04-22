import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
    isAuthenticated: boolean;
    children: JSX.Element; // ReactComponent
}
export const PrivateRouter = ({ isAuthenticated, children }: Props) => {
    return isAuthenticated ? <Navigate to="/home" /> : children;
};
