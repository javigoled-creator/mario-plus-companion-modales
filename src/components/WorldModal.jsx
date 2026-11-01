import React from 'react';

export const WorldModal = ({ isOpen, onClose, world }) => {
  if (!isOpen || !world) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1050 }} role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title fw-bold">🌍 Detalle del Mundo</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body p-4 text-center">
            <h3 className="text-success fw-bold mb-3">{world.name}</h3>
            <div className="d-flex justify-content-center gap-2 mb-3">
              <span className="badge bg-primary px-3 py-2">Mundo ID: {world.id}</span>
            </div>
            <p className="mb-2 text-muted">
              <strong>Tipo de zonas:</strong> {world.type || 'Clásico / Aventura'}
            </p>
            <hr className="my-3" />
            <p className="text-secondary lh-base px-2">
              {world.description || 'Explora este increíble escenario del universo de Mario Bros con todos sus secretos y niveles.'}
            </p>
          </div>
          <div className="modal-footer border-0 justify-content-center pb-4">
            <button type="button" className="btn btn-outline-success px-4 rounded-pill" onClick={onClose}>
              Regresar a la lista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
