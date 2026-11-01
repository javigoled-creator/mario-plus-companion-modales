import { Link } from 'react-router-dom';

import {
  getUsuario,
  getMetricas,
  getInsignias
} from '../services/companionData';

import '../styles/profile.css';


function Profile() {

  const usuario = getUsuario();

  const metricas = getMetricas();

  const insignias = getInsignias();


  function verLogro(nombreLogro) {

    alert(
      `Has seleccionado la insignia: ${nombreLogro}`
    );

  }


  return (

    <div className="profile-page">

      <div className="container py-4 py-lg-5">


        {/* ===============================================
            CABECERA DEL PERFIL
        =============================================== */}

        <section className="profile-hero">

          <div className="profile-hero-overlay"></div>


          <div className="profile-hero-content">

            <div className="row align-items-center g-4">


              <div className="col-lg-8">

                <div className="d-flex align-items-center gap-4 flex-wrap">


                  <div className="avatar-wrapper">

                    <img
                      src={usuario.avatarUrl}
                      alt={usuario.nombreJugador}
                      className="avatar-image"
                    />

                  </div>


                  <div>

                    <p className="profile-tag mb-2">
                      Perfil del jugador
                    </p>


                    <h1 className="profile-title mb-2">
                      {usuario.nombreJugador}
                    </h1>


                    <p className="profile-subtext mb-0">
                      {usuario.descripcionJugador}
                    </p>

                  </div>

                </div>

              </div>


              <div className="col-lg-4">

                <div className="profile-level-card">

                  <h3 className="mb-2">
                    Nivel actual
                  </h3>


                  <p className="level-name mb-3">
                    {usuario.nivelActual}
                  </p>


                  <div className="progress modern-progress mb-3">

                    <div
                      className="progress-bar"
                      style={{
                        width: `${usuario.progresoNivel}%`
                      }}
                    >
                      {usuario.progresoNivel}%
                    </div>

                  </div>


                  <p className="level-help mb-0">
                    {usuario.mensajeNivel}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ===============================================
            MÉTRICAS
        =============================================== */}

        <section className="mt-4">

          <div className="row g-3">


            <div className="col-md-6 col-xl-3">

              <div className="metric-card">

                <h3>
                  {metricas.partidas}
                </h3>

                <p>
                  Partidas completadas
                </p>

              </div>

            </div>


            <div className="col-md-6 col-xl-3">

              <div className="metric-card">

                <h3>
                  {metricas.rachaMaxima}
                </h3>

                <p>
                  Racha máxima
                </p>

              </div>

            </div>


            <div className="col-md-6 col-xl-3">

              <div className="metric-card">

                <h3>
                  {metricas.retosSuperados}
                </h3>

                <p>
                  Retos superados
                </p>

              </div>

            </div>


            <div className="col-md-6 col-xl-3">

              <div className="metric-card">

                <h3>
                  {metricas.mundosExplorados}
                </h3>

                <p>
                  Mundos explorados
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ===============================================
            INFORMACIÓN + INSIGNIAS
        =============================================== */}

        <section className="mt-4">

          <div className="row g-4">


            {/* INFORMACIÓN DEL JUGADOR */}

            <div className="col-lg-5">

              <div className="content-card h-100">

                <h2 className="section-heading">
                  Información del jugador
                </h2>


                <div className="info-list">


                  <div className="info-item">

                    <span className="info-label">
                      Nombre de usuario
                    </span>

                    <span className="info-value">
                      {usuario.nombreUsuario}
                    </span>

                  </div>


                  <div className="info-item">

                    <span className="info-label">
                      Correo
                    </span>

                    <span className="info-value">
                      {usuario.correoUsuario}
                    </span>

                  </div>


                  <div className="info-item">

                    <span className="info-label">
                      Estado
                    </span>

                    <span className="info-value">
                      {usuario.estadoUsuario}
                    </span>

                  </div>


                  <div className="info-item">

                    <span className="info-label">
                      Miembro desde
                    </span>

                    <span className="info-value">
                      {usuario.miembroDesde}
                    </span>

                  </div>

                </div>


                <div className="mt-4">

                  <Link
                    to="/home"
                    className="btn btn-danger rounded-pill px-4"
                  >
                    Volver a Home
                  </Link>

                </div>

              </div>

            </div>


            {/* LOGROS E INSIGNIAS */}

            <div className="col-lg-7">

              <div className="content-card h-100">

                <h2 className="section-heading">
                  Logros e insignias
                </h2>


                <div className="row g-3">

                  {insignias.map((insignia) => (

                    <div
                      className="col-md-4"
                      key={insignia.nombre}
                    >

                      <button
                        type="button"
                        className={
                          `badge-card text-center badge-card-button ${
                            insignia.activa
                              ? 'active-badge'
                              : ''
                          }`
                        }
                        onClick={() =>
                          verLogro(insignia.nombre)
                        }
                      >

                        <img
                          src={insignia.imagen}
                          alt={insignia.nombre}
                          className="badge-image"
                        />


                        <h4>
                          {insignia.nombre}
                        </h4>


                        <p>
                          {insignia.descripcion}
                        </p>

                      </button>

                    </div>

                  ))}

                </div>


                <div className="mt-4">

                  <h3 className="subsection-heading">
                    Resumen de progreso
                  </h3>


                  <p className="summary-text mb-0">

                    El perfil del jugador reúne el avance
                    general dentro de la plataforma:
                    progreso por nivel, retos cumplidos,
                    actividad reciente y potencial de
                    desbloqueo de contenido exclusivo,
                    todo integrado en una interfaz clara
                    y visual.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

    </div>

  );

}


export default Profile;