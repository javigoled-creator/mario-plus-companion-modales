import { getUsuario, getMetricas } from '../services/companionData';

import '../styles/home.css';


function Home() {

  // ======================================================
  // DATOS COMPARTIDOS
  // ======================================================

  const usuario =
    getUsuario();


  const metricas =
    getMetricas();


  // ======================================================
  // ACCESOS RÁPIDOS
  // ======================================================

  const accesosRapidos = [

    {
      titulo: 'Curiosidades',

      descripcion:
        'Descubre contenido especial del universo Mario.',

      imagen:
        '/assets/curiosidades-icon.png'
    },

    {
      titulo: 'Reto del Día',

      descripcion:
        'Completa desafíos y mejora tu progreso diario.',

      imagen:
        '/assets/reto-icon.png'
    }

  ];


  // ======================================================
  // EVENTO
  // ======================================================

  function verSeccion(nombreSeccion) {

    alert(
      `Has seleccionado la sección: ${nombreSeccion}`
    );

  }


  return (

    <div className="home-page">

      <main className="container py-4 py-lg-5">


        {/* =================================================
            HERO
        ================================================= */}

        <section className="hero-panel">

          <div className="row align-items-center g-4">


            <div className="col-lg-7">

              <div className="hero-copy">

                <p className="mini-label mb-2">
                  Companion App
                </p>


                <h1 className="hero-title">

                  Hi, {usuario.nombreJugador}

                </h1>


                <p className="hero-text">

                  {usuario.mensajeProgreso}

                </p>


                <div className="hero-actions">

                  <button
                    type="button"
                    className="btn btn-light btn-lg rounded-pill px-4"
                    onClick={() =>
                      verSeccion('Curiosidades')
                    }
                  >
                    Curiosidades
                  </button>


                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg rounded-pill px-4"
                    onClick={() =>
                      verSeccion('Reto del Día')
                    }
                  >
                    Reto del Día
                  </button>

                </div>

              </div>

            </div>


            <div className="col-lg-5">

              <div className="progress-panel">

                <div
                  className="progress-circle"
                  style={{
                    background:
                      `conic-gradient(
                        #ffcc33 0deg ${usuario.progresoNivel * 3.6}deg,
                        rgba(255,255,255,0.35)
                        ${usuario.progresoNivel * 3.6}deg 360deg
                      )`
                  }}
                >

                  <div className="progress-circle-inner">

                    {usuario.progresoNivel}%

                  </div>

                </div>


                <div className="level-info">

                  <h3 className="mb-1">

                    Nivel {usuario.nivelActual}

                  </h3>


                  <p className="mb-0">

                    {usuario.mensajeNivel}

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            MÉTRICAS
        ================================================= */}

        <section className="stats-section mt-4">

          <div className="row g-3">


            <div className="col-md-4">

              <div className="stat-card">

                <h3>
                  {metricas.partidas}
                </h3>

                <p>
                  partidas
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="stat-card">

                <h3>
                  {metricas.rachaMaxima}
                </h3>

                <p>
                  racha máxima
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="stat-card">

                <h3>
                  {metricas.mejorMarca}
                </h3>

                <p>
                  mejor marca
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            ACCESOS RÁPIDOS
        ================================================= */}

        <section className="quick-section mt-4">

          <div className="row g-4">


            {accesosRapidos.map(
              (acceso) => (

                <div
                  className="col-md-6 col-xl-4"
                  key={acceso.titulo}
                >

                  <button
                    type="button"
                    className="quick-card quick-card-button"
                    onClick={() =>
                      verSeccion(acceso.titulo)
                    }
                  >

                    <img
                      src={acceso.imagen}
                      alt={acceso.titulo}
                      className="quick-image"
                    />


                    <h4>
                      {acceso.titulo}
                    </h4>


                    <p>
                      {acceso.descripcion}
                    </p>

                  </button>

                </div>

              )
            )}


            {/* CONTENIDO DESBLOQUEABLE */}

            <div className="col-xl-4">

              <button
                type="button"
                className="unlock-card unlock-card-button"
                onClick={() =>
                  verSeccion(
                    'Contenido desbloqueable'
                  )
                }
              >

                <img
                  src="/assets/desbloqueo-card.jpg"
                  alt="Contenido desbloqueable"
                  className="unlock-image"
                />


                <div className="unlock-overlay">

                  <h4>
                    Juega para desbloquear
                  </h4>


                  <p>
                    Accede a contenido exclusivo
                    al cumplir tus metas.
                  </p>

                </div>

              </button>

            </div>

          </div>

        </section>

      </main>

    </div>

  );

}


export default Home;