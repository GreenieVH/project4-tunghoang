// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getUserData } from './AuthService';

const ProtectedRoute = ({ path, children }) => {
  const user = getUserData();

  return (
    <Route>
      path={path}
      element={user && user.isAdmin ? children : <Navigate to="/login" />}
    </Route>
  );
};

export default ProtectedRoute;
