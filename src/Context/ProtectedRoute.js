import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, layout: Layout, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.isAdmin) {
    return (
      <Layout>
        <Component {...rest} />
      </Layout>
    );
  } else {
    return <Navigate to="/login/signin" />;
  }
};

export default ProtectedRoute;
