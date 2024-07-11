import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ element: Component, layout: Layout, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    return (
      <Layout>
        <Component {...rest} />
      </Layout>
    );
  } else {
    alert('Đăng nhập để tiếp tục!')
    return <Navigate to="/login/signin" />;
  }
};

export default AuthRoute;
