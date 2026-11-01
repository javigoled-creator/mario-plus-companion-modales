import {
  useState
} from 'react';

import {
  useLocation,
  useNavigate
} from 'react-router-dom';

import {
  useAuth
} from '../context/AuthContext';

import '../styles/login.css';


function Login() {

  // ======================================================
  // ESTADOS DEL FORMULARIO
  // ======================================================

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [error, setError] =
    useState('');


  // ======================================================
  // AUTENTICACIÓN
  // ======================================================

  const {
    login
  } = useAuth();


  const navigate =
    useNavigate();


  const location =
    useLocation();


  // Si veníamos de una ruta protegida,
  // volver allí después de iniciar sesión.
  const destino =
    location.state?.from?.pathname ||
    '/home';


  // ======================================================
  // SUBMIT
  // ======================================================

  function handleSubmit(event) {

    event.preventDefault();

    setError('');


    const resultado =
      login(
        email,
        password
      );


    if (!resultado.ok) {

      setError(
        resultado.message
      );

      return;

    }


    navigate(
      destino,
      {
        replace: true
      }
    );

  }


  // ======================================================
  // INTERFAZ
  // ======================================================

  return (

    <div className="login-page">

      <div className="login-shell">


        {/* PANEL VISUAL */}

        <section className="login-visual">

          <div className="login-visual-overlay">

            <p className="login-eyebrow">
              Mario Plus
            </p>

            <h1>
              Continúa tu aventura
            </h1>

            <p>

              Guarda tu progreso,
              consulta tus logros y
              continúa explorando
              los mundos de Mario.

            </p>

          </div>

        </section>


        {/* FORMULARIO */}

        <section className="login-form-panel">

          <div className="login-form-content">


            <img
              src="/assets/logo-mario-plus.png"
              alt="Mario Plus Companion"
              className="login-logo"
            />


            <h2>
              Iniciar sesión
            </h2>


            <p className="login-intro">

              Ingresa para acceder
              a tu perfil de jugador.

            </p>


            {/* CREDENCIALES PARA LA ACTIVIDAD */}

            <div className="demo-access">

              <strong>
                Acceso de demostración
              </strong>

              <span>
                Correo:
                {' '}
                mario@marioplus.com
              </span>

              <span>
                Contraseña:
                {' '}
                mario123
              </span>

            </div>


            <form
              onSubmit={handleSubmit}
              className="login-form"
            >


              <div className="form-group">

                <label htmlFor="email">
                  Correo electrónico
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={
                    event =>
                      setEmail(
                        event.target.value
                      )
                  }
                  placeholder="mario@marioplus.com"
                  autoComplete="email"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="password">
                  Contraseña
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={
                    event =>
                      setPassword(
                        event.target.value
                      )
                  }
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />

              </div>


              {
                error &&
                (
                  <div
                    className="login-error"
                    role="alert"
                  >

                    {error}

                  </div>
                )
              }


              <button
                type="submit"
                className="login-submit"
              >
                Iniciar sesión
              </button>

            </form>


            <button
              type="button"
              className="login-back"
              onClick={() =>
                navigate('/home')
              }
            >
              ← Volver a Home
            </button>

          </div>

        </section>

      </div>

    </div>

  );

}


export default Login;