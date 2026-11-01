import React from 'react';

export const GameModal = ({ isOpen, onClose, game }) => {
  if (!isOpen || !game) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1050 }} role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow">
          <div className="modal-header bg-warning text-dark">
            <h5 className="modal-title fw-bold">🎮 Detalle del Juego</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body p-4 text-center">
            <h3 className="text-warning bg-dark rounded py-2 fw-bold mb-3">{game.title || game.name}</h3>
            <div className="d-flex justify-content-center gap-2 mb-3">
              <span className="badge bg-secondary px-3 py-2">Lanzamiento: {game.releaseYear || game.year || 'N/A'}</span>
              <span className="badge bg-primary px-3 py-2">Plataforma: {game.platform || 'Nintendo'}</span>
            </div>
            <hr className="my-3" />
            <p className="text-secondary lh-base px-2">
              {game.description || 'Descubre la historia, los niveles y las innovaciones técnicas que este emblemático título aportó al universo de Mario Bros.'}
            </p>
          </div>
          <div className="modal-footer border-0 justify-content-center pb-4">
            <button type="button" className="btn btn-outline-dark px-4 rounded-pill" onClick={onClose}>
              Regresar a la lista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
