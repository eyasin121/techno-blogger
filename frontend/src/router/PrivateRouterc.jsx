import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PrivateRouterc = ({ children }) => {
    const {user} = useSelector((state) => state.auth);
    const location = useLocation();
    if(user.email==='test@gmail.com'){
      return children;
    }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRouterc