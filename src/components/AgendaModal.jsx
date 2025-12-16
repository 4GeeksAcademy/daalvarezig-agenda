import React, { useState } from "react";

export const AgendaModal = () => {
    const [slugInput, setSlugInput] = useState("");

    return (
        <div 
            className="modal fade" 
            id="agendaModal" 
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Selecciona tu Agenda</h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <div className="modal-body">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Escribe tu slug (ej: itopy)"
                            value={slugInput}
                            onChange={(e) => setSlugInput(e.target.value)}
                        />
                    </div>

                    <div className="modal-footer">
                        <button 
                            className="btn btn-secondary" 
                            data-bs-dismiss="modal"
                        >
                            Cancelar
                        </button>

                        <button 
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                        >
                            Acceder
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};
