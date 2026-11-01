import {
  NavLink,
  useNavigate
} from 'react-router-dom';

import {
  useAuth
} from '../context/AuthContext';

import '../styles/navbar.css';


function Navbar() {

  const {
    isAuthenticated,
    user,
    logout
  } = useAuth();


  const navigate =
    useNavigate();


  function handleLogout() {

    logout();

    navigate('/login');

  }


  return (

    <header className="site-header">

      <div className="container">

        <div className="header-inner">


          {/* LOGO */}

          <div className="brand-area">

            <NavLink to="/home">

              <img
                src="/assets/logo-mario-plus.png"
                alt="Logo Mario Plus"
                className="brand-logo-img"
              />

            </NavLink>

          </div>


          {/* NAVEGACIÓN */}

          <nav className="main-nav">

            <NavLink
              to="/home"
              className={({ isActive }) =>
                `nav-link ${
                  isActive
                    ? 'active-link'
                    : ''
                }`
              }
            >
              Home
            </NavLink>


            <NavLink
              to="/worlds"
              className={({ isActive }) =>
                `nav-link ${
                  isActive
                    ? 'active-link'
                    : ''
                }`
              }
            >
              Mundos
            </NavLink>


            <NavLink
              to="/characters"
              className={({ isActive }) =>
                `nav-link ${
                  isActive
                    ? 'active-link'
                    : ''
                }`
              }
            >
              Personajes
            </NavLink>


            <NavLink
              to="/games"
              className={({ isActive }) =>
                `nav-link ${
                  isActive
                    ? 'active-link'
                    : ''
                }`
              }
            >
              Juegos
            </NavLink>

          </nav>


          {/* ACCIONES */}

          <div className="header-actions">


            <div className="search-box">

              <input
                type="text"
                placeholder="Buscar"
                aria-label="Buscar"
              />

            </div>


            {
              isAuthenticated
                ? (
                  <>

                    <NavLink
                      to="/profile"
                      className="profile-btn"
                    >
                      {user?.name || 'Perfil'}
                    </NavLink>


                    <button
                      type="button"
                      className="logout-btn"
                      onClick={handleLogout}
                    >
                      Salir
                    </button>

                  </>
                )
                : (
                  <NavLink
                    to="/login"
                    className="profile-btn"
                  >
                    Iniciar sesión
                  </NavLink>
                )
            }

          </div>

        </div>

      </div>

    </header>

  );

}


export default Navbar;