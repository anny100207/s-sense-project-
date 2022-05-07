import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";


const RequiredAuth = ( {children}) =>{
    const {token} = useContext(AuthContext);
    const location = useLocation();
    if (token) return children
    
    return <Navigate to="/login" state={{from:location}} replace />
    
}

export default RequiredAuth