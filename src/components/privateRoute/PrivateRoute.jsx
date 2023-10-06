import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    console.log(user);
    if(user){
        return children;
    }
    return <Navigate to='/login' replace></Navigate>;
};

export default PrivateRoute;