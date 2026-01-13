import { useNavigate } from "react-router-dom";
export default function ContactCard({ contact, onDelete }) {


    const navigate = useNavigate();

    return (
        <div className="card mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">

                <div>
                    <h5 className="card-title">{contact.name}</h5>
                    <p className="card-text mb-1"><strong>📞</strong> {contact.phone}</p>
                    <p className="card-text mb-1"><strong>📧</strong> {contact.email}</p>
                    <p className="card-text"><strong>📍</strong> {contact.address}</p>
                </div>

                <div>
                    <button className="btn btn-warning btn-sm me-2"
                        onClick={() =>
                            navigate(`/add-contact/${contact.id}`, {
                                state: { contact }
                            })
                        }>
                        Editar
                    </button>
                    <button className="btn btn-danger btn-sm"
                        onClick={() => onDelete(contact.id)}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}
