import React from 'react';

export const DetailModal = ({ isOpen, onClose, character }) => {
  if (!isOpen || !character) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1050 }} role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title fw-bold">✨ Detalle del Personaje</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body p-4 text-center">
            <h3 className="text-danger fw-bold mb-3">{character.name}</h3>
            <div className="d-flex justify-content-center gap-2 mb-3">
              <span className="badge bg-primary px-3 py-2">Rol: {character.role}</span>
              <span className="badge bg-secondary px-3 py-2">Especie: {character.species || 'Humano'}</span>
            </div>
            <p className="mb-2 text-muted">
              <strong>Primera aparición:</strong> {character.firstAppearance || '1981'}
            </p>
            <hr className="my-3" />
            <p className="text-secondary lh-base px-2">
              {character.description}
            </p>
          </div>
          <div className="modal-footer border-0 justify-content-center pb-4">
            <button type="button" className="btn btn-outline-danger px-4 rounded-pill" onClick={onClose}>
              Regresar a la lista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
