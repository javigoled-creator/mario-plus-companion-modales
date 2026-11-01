import { useMemo, useState } from 'react';

import useApiData from '../hooks/useApiData';

import '../styles/characters.css';
import { DetailModal } from '../components/DetailModal';


function Characters() {

  // ======================================================
  // DATOS DESDE LA API
  // ======================================================

  const {
    data,
    loading,
    error
  } = useApiData('/characters');


  const personajes =
    Array.isArray(data)
      ? data
      : [];


  // ======================================================
  // ESTADOS DE LA INTERFAZ
  // ======================================================

  const [filtro, setFiltro] =
    useState('todos');
      const [modalOpen, setModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleOpenModal = (personaje) => {
    setSelectedCharacter(personaje);
    setModalOpen(true);
  };


  const [busqueda, setBusqueda] =
    useState('');
    

  const [favoritos, setFavoritos] =
    useState([]);


  // ======================================================
  // FILTRADO
  // ======================================================

  const personajesFiltrados =
    useMemo(() => {

      let resultado =
        [...personajes];


      if (filtro === 'favoritos') {

        resultado =
          resultado.filter(
            personaje =>
              favoritos.includes(personaje.id)
          );

      }


      const texto =
        busqueda
          .trim()
          .toLowerCase();


      if (texto) {

        resultado =
          resultado.filter(personaje => {

            const nombre =
              personaje.name
                ?.toLowerCase()
                ?? '';

            const rol =
              personaje.role
                ?.toLowerCase()
                ?? '';

            const especie =
              personaje.species
                ?.toLowerCase()
                ?? '';


            return (
              nombre.includes(texto) ||
              rol.includes(texto) ||
              especie.includes(texto)
            );

          });

      }


      return resultado;

    }, [
      personajes,
      filtro,
      busqueda,
      favoritos
    ]);


  // ======================================================
  // FAVORITOS
  // ======================================================

  function toggleFavorito(id) {

    setFavoritos(
      actuales => {

        if (actuales.includes(id)) {

          return actuales.filter(
            favoritoId =>
              favoritoId !== id
          );

        }


        return [
          ...actuales,
          id
        ];

      }
    );

  }


  // ======================================================
  // VER MÁS
  // ======================================================

  function verMas(personaje) {

    const informacion = [

      personaje.name,

      personaje.role
        ? `Rol: ${personaje.role}`
        : '',

      personaje.species
        ? `Especie: ${personaje.species}`
        : '',

      personaje.firstAppearance
        ? `Primera aparición: ${personaje.firstAppearance}`
        : '',

      personaje.description || ''

    ]
      .filter(Boolean)
      .join('\n');


    alert(informacion);
 
  handleOpenModal(personaje);
  }


  // ======================================================
  // RUTA DE IMÁGENES
  // ======================================================

function resolverImagen(imagen) {

  const placeholder =
    '/assets/personaje-placeholder.svg';


  if (!imagen) {
    return placeholder;
  }


  // ======================================================
  // CORRECCIONES ENTRE LOS NOMBRES DE POSTMAN
  // Y LOS ARCHIVOS REALES DEL PROYECTO
  // ======================================================

  const equivalencias = {

    // Existe, pero con otra extensión
    'peach.png': 'peach.webp',

    // Todavía no existen físicamente en public/assets
    'toad.png': 'personaje-placeholder.svg',
    'daisy.png': 'personaje-placeholder.svg',
    'wario.png': 'personaje-placeholder.svg',
    'donkey-kong.png': 'personaje-placeholder.svg'

  };


  const nombreReal =
    equivalencias[imagen] || imagen;


  // Si ya es una URL completa
  if (
    nombreReal.startsWith('http://') ||
    nombreReal.startsWith('https://') ||
    nombreReal.startsWith('/')
  ) {

    return nombreReal;

  }


  return `/assets/${nombreReal}`;
}


  // ======================================================
  // CARGANDO
  // ======================================================

  if (loading) {

    return (

      <main className="container py-5">

        <div className="characters-status">

          <div
            className="spinner-border text-danger"
            role="status"
          >
            <span className="visually-hidden">
              Cargando...
            </span>
          </div>

          <p className="mt-3 mb-0">
            Cargando personajes...
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

        <div className="characters-error">

          <h2>
            No fue posible cargar los personajes
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

    <div className="characters-page">

      <main className="container py-5">


        {/* HERO */}

        <section className="characters-hero mb-5">

          <div className="characters-hero-banner">

            <div className="characters-hero-content">

              <p className="mini-label mb-2">
                Universo Mario
              </p>

              <h1 className="characters-title">
                Personajes
              </h1>

              <p className="characters-text">

                Explora los personajes del universo Mario,
                conoce sus historias, roles, especies y
                curiosidades.

              </p>

            </div>

          </div>

        </section>


        {/* FILTROS Y BUSCADOR */}

        <section className="characters-controls mb-4">

          <div className="character-filter-bar">

            <button
              type="button"
              className={
                `filter-btn ${
                  filtro === 'todos'
                    ? 'active-filter'
                    : ''
                }`
              }
              onClick={() =>
                setFiltro('todos')
              }
            >
              Todos
            </button>


            <button
              type="button"
              className={
                `filter-btn ${
                  filtro === 'favoritos'
                    ? 'active-filter'
                    : ''
                }`
              }
              onClick={() =>
                setFiltro('favoritos')
              }
            >
              Favoritos ⭐
            </button>

          </div>


          <div className="character-search">

            <input
              type="search"
              placeholder="Buscar por nombre, rol o especie"
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

        <p className="characters-results">

          {personajesFiltrados.length}
          {' '}
          personaje
          {
            personajesFiltrados.length !== 1
              ? 's'
              : ''
          }

        </p>


        {/* TARJETAS */}

        <section className="row g-4">
          {personajesFiltrados.map((personaje) => {
            const esFavorito = favoritos.includes(personaje.id);

            return (
              <div
                className="col-sm-6 col-lg-4 col-xl-3"
                key={personaje.id}
              >
                <article className="character-card">
                  <div className="character-image-wrap">
                    <img
                      src={resolverImagen(personaje.image)}
                      alt={personaje.name}
                      className="character-image"
                    />
                  </div>

                  <div className="character-content">
                    <button
                      type="button"
                      className={`favorite-badge ${esFavorito ? 'active' : ''}`}
                      onClick={() => toggleFavorito(personaje.id)}
                    >
                      ⭐ {esFavorito ? 'Favorito' : 'Agregar favorito'}
                    </button>

                    <h3>{personaje.name}</h3>

                    <div className="character-meta">
                      {personaje.role && <span>{personaje.role}</span>}
                      {personaje.species && <span>{personaje.species}</span>}
                    </div>

                    <p>{personaje.description}</p>

                    <button
                      type="button"
                      className="btn btn-danger rounded-pill px-4"
                      onClick={() => handleOpenModal(personaje)}
                    >
                      Ver más
                    </button>
                  </div>
                </article>
              </div>
            );
          })}
        </section>

        {personajesFiltrados.length === 0 && (
          <div className="characters-empty">
            No encontramos personajes con esos criterios.
          </div>
        )}

      </main>

      <DetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        character={selectedCharacter}
      />

    </div>

  );

}




export default Characters;