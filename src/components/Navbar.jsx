import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="text-center py-4"
           style={{ backgroundColor: "#000", // Fondo negro tech
           borderTop: "2px solid #00eaff", // Línea azul neó
           boxShadow: "0 0 20px #00eaff", // Glow neón
           color: "#00eaff",
           fontFamily: "Roboto Mono, monospace",
         }}
		  >
            <Link className="navbar-brand m-0 fw-bold" to="/contacts">
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
