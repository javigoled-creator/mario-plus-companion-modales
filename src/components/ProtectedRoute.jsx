import {
  Navigate,
  useLocation
} from 'react-router-dom';

import {
  useAuth
} from '../context/AuthContext';


function ProtectedRoute({ children }) {

  const {
    isAuthenticated
  } = useAuth();


  const location =
    useLocation();


  // Si no existe sesión:
  if (!isAuthenticated) {

    return (

      <Navigate
        to="/login"
        replace
        state={{
          from: location
        }}
      />

    );

  }


  // Si existe sesión:
  return children;

}


export default ProtectedRoute;