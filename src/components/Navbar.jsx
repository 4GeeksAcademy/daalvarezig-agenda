import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark px-3 mb-4">
            <Link className="navbar-brand" to="/contacts">
                iTopy Agenda
            </Link>

            <div>
                <Link className="btn btn-success me-2" to="/contacts">
                    Ver Contactos
                </Link>

                <Link className="btn btn-primary" to="/add">
                    Añadir Contacto
                </Link>
            </div>
        </nav>
    );
}
