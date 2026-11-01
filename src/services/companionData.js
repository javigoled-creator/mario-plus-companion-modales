// ======================================================
// DATOS COMPARTIDOS DE MARIO PLUS COMPANION
// Equivalente en React al antiguo CompanionDataService
// ======================================================

const usuario = {
  nombreJugador: 'Mario',

  mensajeProgreso:
    'Te faltan 10 rachas para ser Nivel Gold. Explora curiosidades, completa retos y desbloquea contenido exclusivo.',

  descripcionJugador:
    'Nivel Silver · Explorador del Reino Champiñón · Progreso activo en retos y mundos desbloqueables',

  nivelActual: 'Silver',

  progresoNivel: 80,

  mensajeNivel:
    'Tu progreso actual te acerca al Nivel Gold.',

  nombreUsuario: '@mario.player',

  correoUsuario: 'mario@nintendo.com',

  estadoUsuario: 'Activo',

  miembroDesde: '2026',

  avatarUrl: '/assets/avatar-mario.png'
};


const metricas = {
  partidas: 120,
  rachaMaxima: 47,
  mejorMarca: 0.43,
  retosSuperados: 12,
  mundosExplorados: 5
};


const insignias = [
  {
    nombre: 'Bronze',
    descripcion: 'Primer nivel desbloqueado',
    imagen: '/assets/badge-bronze.png',
    activa: false
  },
  {
    nombre: 'Silver',
    descripcion: 'Nivel actual del jugador',
    imagen: '/assets/badge-silver.png',
    activa: true
  },
  {
    nombre: 'Gold',
    descripcion: 'Próximo objetivo a desbloquear',
    imagen: '/assets/badge-gold.png',
    activa: false
  }
];


export function getUsuario() {
  return usuario;
}


export function getMetricas() {
  return metricas;
}


export function getInsignias() {
  return insignias;
}