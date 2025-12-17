import { useState, useEffect } from "react";
import ContactCard from "../components/ContactCard.jsx";
import { Link } from "react-router-dom";

const BASE_URL = "https://playground.4geeks.com/contact";
const SLUG = "iTopy";

export default function Contact() {

    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {
        const resp = await fetch(`${BASE_URL}/agendas/${SLUG}/contacts`);
        const data = await resp.json();
        setContacts(data.contacts || []);
    };

    const handleDelete = async (id) => {
        const resp = await fetch(
            `${BASE_URL}/agendas/${SLUG}/contacts/${id}`,
            { method: "DELETE" }
        );

        if (!resp.ok) {
            alert("Error eliminando contacto");
            return;
        }

        // Recargar lista después de borrar
        loadContacts();
    };

    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card p-4 shadow-lg" style={{ width: "700px", borderRadius: "15px" }}>

            <h2>Contactos</h2>

            {contacts.length === 0 && (
                <p>No hay contactos en esta agenda.</p>
            )}

            {contacts.map(contact => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                    onDelete={handleDelete}
                />
            ))}
            </div>
        </div>
    );
}
