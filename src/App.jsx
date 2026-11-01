import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';


import Navbar
  from './components/Navbar';

import ProtectedRoute
  from './components/ProtectedRoute';


import Landing
  from './pages/Landing';

import Login
  from './pages/Login';

import Home
  from './pages/Home';

import Worlds
  from './pages/Worlds';

import Characters
  from './pages/Characters';

import Games
  from './pages/Games';

import Profile
  from './pages/Profile';


function App() {

  const location =
    useLocation();


  // Pantallas independientes,
  // sin navegación superior.
  const hideNavbar =
    location.pathname === '/' ||
    location.pathname === '/login';


  return (

    <>

      {!hideNavbar && <Navbar />}


      <Routes>


        {/* LANDING */}

        <Route
          path="/"
          element={<Landing />}
        />


        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* HOME */}

        <Route
          path="/home"
          element={<Home />}
        />


        {/* MUNDOS */}

        <Route
          path="/worlds"
          element={<Worlds />}
        />


        {/* PERSONAJES */}

        <Route
          path="/characters"
          element={<Characters />}
        />


        {/* JUEGOS */}

        <Route
          path="/games"
          element={<Games />}
        />


        {/* PERFIL PROTEGIDO */}

        <Route
          path="/profile"
          element={

            <ProtectedRoute>

              <Profile />

            </ProtectedRoute>

          }
        />


      </Routes>

    </>

  );

}


export default App;