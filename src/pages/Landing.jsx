import { Link } from 'react-router-dom';

import '../styles/landing.css';


function Landing() {

  return (

    <div className="onboarding-page">

      <div className="container onboarding-shell">

        <div className="onboarding-card">


          {/* ============================================
              ZONA VISUAL
          ============================================ */}

          <section
            className="onboarding-visual"
            aria-label="Mario Plus Companion"
          >
          </section>


          {/* ============================================
              CONTENIDO
          ============================================ */}

          <section className="onboarding-content">

            <div className="onboarding-content-inner">


              <img
                src="/assets/logo-mario-plus.png"
                alt="Mario Plus Companion"
                className="onboarding-logo"
              />


              <p className="onboarding-eyebrow">
                Companion App
              </p>


              <h1 className="onboarding-title">
                Welcome to Mario+
              </h1>


              <p className="onboarding-text">

                Descubre retos, curiosidades,
                progreso y contenido especial
                dentro de una experiencia companion
                inspirada en el universo Mario Bros.

              </p>


              <div className="onboarding-actions">


                {/* LOGIN */}

                <Link
                  to="/login"
                  className="btn btn-danger btn-lg rounded-pill onboarding-primary-btn"
                >
                  Iniciar sesión
                </Link>


                {/* INVITADO */}

                <Link
                  to="/home"
                  className="btn btn-outline-secondary btn-lg rounded-pill guest-btn"
                >
                  Continuar como invitado
                </Link>

              </div>


              <p className="onboarding-help">

                Puedes explorar la aplicación como invitado.
                El perfil requiere iniciar sesión.

              </p>

            </div>

          </section>

        </div>

      </div>

    </div>

  );

}


export default Landing;