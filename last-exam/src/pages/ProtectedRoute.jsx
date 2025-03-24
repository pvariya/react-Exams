import React from 'react';
import { Route, Navigate } from 'react-router-dom';


const ProtectedRoute = ({ element, ...rest }) => {
    const isAuthenticated = localStorage.getItem('user');


    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Route {...rest} element={element} />;
};
export default ProtectedRoute