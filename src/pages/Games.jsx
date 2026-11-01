import {
  useMemo,
  useState
} from 'react';

import useApiData from '../hooks/useApiData';

import '../styles/games.css';


function Games() {

  // ======================================================
  // DATOS DESDE POSTMAN
  // ======================================================

  const {
    data,
    loading,
    error
  } = useApiData('/games');


  const juegos =
    Array.isArray(data)
      ? data
      : [];


  // ======================================================
  // ESTADOS DE INTERFAZ
  // ======================================================

  const [busqueda, setBusqueda] =
    useState('');

  const [genero, setGenero] =
    useState('todos');


  // ======================================================
  // OBTENER GÉNEROS DISPONIBLES
  // ======================================================

  const generos =
    useMemo(() => {

      const lista =
        juegos
          .map(juego => juego.genre)
          .filter(Boolean);

      return [
        ...new Set(lista)
      ];

    }, [juegos]);


  // ======================================================
  // FILTRADO
  // ======================================================

  const juegosFiltrados =
    useMemo(() => {

      const texto =
        busqueda
          .trim()
          .toLowerCase();


      return juegos.filter(juego => {

        const coincideBusqueda =
          !texto ||
          juego.title
            ?.toLowerCase()
            .includes(texto) ||
          juego.platform
            ?.toLowerCase()
            .includes(texto) ||
          juego.developer
            ?.toLowerCase()
            .includes(texto);


        const coincideGenero =
          genero === 'todos' ||
          juego.genre === genero;


        return (
          coincideBusqueda &&
          coincideGenero
        );

      });

    }, [
      juegos,
      busqueda,
      genero
    ]);


  // ======================================================
  // IMÁGENES LOCALES
  // ======================================================

  function resolverImagenJuego(juego) {

    const imagenes = {

      'Super Mario Odyssey':
        '/assets/game-card-1.jpg',

      'Mario Kart 8 Deluxe':
        '/assets/game-card-2.jpg',

      'Super Mario Bros. Wonder':
        '/assets/game-card-3.jpg',

      "Super Mario 3D World + Bowser's Fury":
        '/assets/game-card-4.jpg'

    };


    return (
      imagenes[juego.title] ||
      '/assets/game-placeholder.svg'
    );

  }


  // ======================================================
  // VER DETALLE
  // ======================================================

  function verJuego(juego) {

    const informacion = [

      juego.title,

      juego.year
        ? `Año: ${juego.year}`
        : '',

      juego.platform
        ? `Plataforma: ${juego.platform}`
        : '',

      juego.genre
        ? `Género: ${juego.genre}`
        : '',

      juego.developer
        ? `Desarrollador: ${juego.developer}`
        : '',

      juego.description || ''

    ]
      .filter(Boolean)
      .join('\n');


    alert(informacion);

  }


  // ======================================================
  // CARGANDO
  // ======================================================

  if (loading) {

    return (

      <main className="container py-5">

        <div className="games-status">

          <div
            className="spinner-border text-danger"
            role="status"
          >
            <span className="visually-hidden">
              Cargando...
            </span>
          </div>

          <p className="mt-3 mb-0">
            Cargando juegos...
          </p>

        </div>

      </main>

    );

  }


  // ======================================================
  // ERROR
  // ======================================================

  if (error) {

    return (

      <main className="container py-5">

        <div className="games-error">

          <h2>
            No fue posible cargar los juegos
          </h2>

          <p>
            {error}
          </p>

        </div>

      </main>

    );

  }


  // ======================================================
  // INTERFAZ
  // ======================================================

  return (

    <div className="games-page">

      <main className="container py-5">


        {/* HERO */}

        <section className="games-hero mb-5">

          <div className="games-hero-content">

            <p className="mini-label mb-2">
              Biblioteca Mario
            </p>

            <h1 className="games-title">
              Juegos
            </h1>

            <p className="games-text">

              Explora títulos del universo Mario,
              conoce sus plataformas, géneros,
              desarrolladores y principales características.

            </p>

          </div>

        </section>


        {/* CONTROLES */}

        <section className="games-controls mb-4">

          <div className="games-filter">

            <select
              value={genero}
              onChange={
                event =>
                  setGenero(
                    event.target.value
                  )
              }
            >

              <option value="todos">
                Todos los géneros
              </option>

              {
                generos.map(
                  generoDisponible => (

                    <option
                      key={generoDisponible}
                      value={generoDisponible}
                    >
                      {generoDisponible}
                    </option>

                  )
                )
              }

            </select>

          </div>


          <div className="games-search">

            <input
              type="search"
              placeholder="Buscar título, plataforma o desarrollador"
              value={busqueda}
              onChange={
                event =>
                  setBusqueda(
                    event.target.value
                  )
              }
            />

          </div>

        </section>


        {/* CANTIDAD */}

        <p className="games-count">

          {juegosFiltrados.length}
          {' '}
          juego
          {
            juegosFiltrados.length !== 1
              ? 's'
              : ''
          }

        </p>


        {/* TARJETAS */}

        <section className="row g-4">

          {
            juegosFiltrados.map(
              juego => (

                <div
                  className="col-md-6 col-xl-4"
                  key={juego.id}
                >

                  <article className="game-card">


                    <div className="game-image-wrap">

                      <img
                        src={
                          resolverImagenJuego(
                            juego
                          )
                        }
                        alt={juego.title}
                        className="game-image"
                      />

                    </div>


                    <div className="game-content">


                      <div className="game-meta-top">

                        <span>
                          {juego.genre}
                        </span>

                        <span>
                          {juego.year}
                        </span>

                      </div>


                      <h2>
                        {juego.title}
                      </h2>


                      <p className="game-platform">

                        {juego.platform}

                      </p>


                      <p className="game-description">

                        {juego.description}

                      </p>


                      {
                        juego.developer &&
                        (
                          <p className="game-developer">

                            Desarrollado por:
                            {' '}

                            <strong>
                              {juego.developer}
                            </strong>

                          </p>
                        )
                      }


                      <button
                        type="button"
                        className="btn btn-danger rounded-pill px-4"
                        onClick={() =>
                          verJuego(juego)
                        }
                      >
                        Ver detalles
                      </button>

                    </div>

                  </article>

                </div>

              )
            )
          }

        </section>


        {
          juegosFiltrados.length === 0 &&
          (
            <div className="games-empty">

              No encontramos juegos
              con esos criterios.

            </div>
          )
        }

      </main>

    </div>

  );

}


export default Games;