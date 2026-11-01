import { useMemo, useState } from 'react';

import useApiData from '../hooks/useApiData';

import '../styles/worlds.css';

import { WorldModal } from '../components/WorldModal';


function Worlds() {

  // ======================================================
  // DATOS DE POSTMAN
  // ======================================================

  const {
    data,
    loading,
    error
  } = useApiData('/worlds');


  const mundos =
    Array.isArray(data)
      ? data
      : [];

        const [worldModalOpen, setWorldModalOpen] = useState(false);
  const [selectedWorld, setSelectedWorld] = useState(null);

  const handleOpenWorldModal = (mundo) => {
    setSelectedWorld(mundo);
    setWorldModalOpen(true);
  };


  // ======================================================
  // BUSCADOR
  // ======================================================

  const [busqueda, setBusqueda] =
    useState('');


  const mundosFiltrados =
    useMemo(() => {

      const texto =
        busqueda
          .trim()
          .toLowerCase();


      if (!texto) {
        return mundos;
      }


      return mundos.filter(mundo => {

        const nombre =
          mundo.name
            ?.toLowerCase()
            ?? '';

        const tipo =
          mundo.type
            ?.toLowerCase()
            ?? '';

        const personaje =
          mundo.mainCharacter
            ?.toLowerCase()
            ?? '';


        return (
          nombre.includes(texto) ||
          tipo.includes(texto) ||
          personaje.includes(texto)
        );

      });

    }, [
      mundos,
      busqueda
    ]);


  // ======================================================
  // IMÁGENES LOCALES
  // ======================================================

  function resolverImagenMundo(nombre) {

    const imagenes = {

      'Mushroom Kingdom':
        '/assets/reino-champinon.jpg',

      'Dark Lands':
        '/assets/tierras-oscuras.jpg',

      'Jungle Kingdom':
        '/assets/mundo-jungla.jpg',

      'Snow Kingdom':
        '/assets/reino-hielo.png',

      'Rainbow Road':
        '/assets/senda-arcoiris.jpg'

    };


    return (
      imagenes[nombre] ||
      '/assets/mundo-placeholder.svg'
    );

  }


  // ======================================================
  // DETALLE
  // ======================================================

  function verMundo(mundo) {

    const informacion = [
      mundo.name,
      `Tipo: ${mundo.type}`,
      `Personaje principal: ${mundo.mainCharacter}`,
      mundo.description
    ]
      .filter(Boolean)
      .join('\n');


    // alert(informacion);

      handleOpenWorldModal(mundo);

  }


  // ======================================================
  // CARGANDO
  // ======================================================

  if (loading) {

    return (

      <main className="container py-5">

        <div className="worlds-status">

          <div
            className="spinner-border text-danger"
            role="status"
          >
            <span className="visually-hidden">
              Cargando...
            </span>
          </div>

          <p className="mt-3 mb-0">
            Cargando mundos...
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

        <div className="worlds-error">

          <h2>
            No fue posible cargar los mundos
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

    <div className="worlds-page">

      <main className="container py-5">


        {/* HERO */}

        <section className="worlds-hero mb-5">

          <div className="worlds-hero-content">

            <p className="mini-label mb-2">
              Explora el universo
            </p>

            <h1 className="worlds-title">
              Mundos
            </h1>

            <p className="worlds-text">

              Recorre diferentes regiones del universo
              Mario y descubre sus características,
              personajes y escenarios.

            </p>

          </div>

        </section>


        {/* BUSCADOR */}

        <section className="worlds-controls mb-4">

          <div>

            <p className="worlds-count mb-0">

              {mundosFiltrados.length}
              {' '}
              mundo
              {
                mundosFiltrados.length !== 1
                  ? 's'
                  : ''
              }

            </p>

          </div>


          <div className="world-search">

            <input
              type="search"
              placeholder="Buscar mundo, tipo o personaje"
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


        {/* TARJETAS */}

        <section className="row g-4">

          {
            mundosFiltrados.map(
              mundo => (

                <div
                  className="col-md-6 col-xl-4"
                  key={mundo.id}
                >

                  <article className="world-card">


                    <div className="world-image-wrap">

                      <img
                        src={
                          resolverImagenMundo(
                            mundo.name
                          )
                        }
                        alt={mundo.name}
                        className="world-image"
                      />

                    </div>


                    <div className="world-content">


                      <div className="world-type">

                        {mundo.type}

                      </div>


                      <h2>
                        {mundo.name}
                      </h2>


                      <p className="world-character">

                        Personaje principal:
                        {' '}
                        <strong>
                          {mundo.mainCharacter}
                        </strong>

                      </p>


                      <p className="world-description">

                        {mundo.description}

                      </p>


                      <button
                        type="button"
                        className="btn btn-danger rounded-pill px-4"
                        onClick={() =>
                          verMundo(mundo)
                        }
                      >
                        Explorar mundo
                      </button>

                    </div>

                  </article>

                </div>

              )
            )
          }

        </section>


        {
          mundosFiltrados.length === 0 &&
          (
            <div className="worlds-empty">

              No encontramos mundos
              con esos criterios.

            </div>
          )
        }

      <WorldModal 
        isOpen={worldModalOpen} 
        onClose={() => setWorldModalOpen(false)} 
        world={selectedWorld} 
      />

      </main>

    </div>

  );

}


export default Worlds;