import { useState, useEffect } from "react";
import ContactCard from "../components/ContactCard.jsx";

const BASE_URL = "https://playground.4geeks.com/contact";
const SLUG = "iTopy";

export default function Contact() {

    const [contacts, setContacts] = useState([]);

    const checkAgenda = async () => {
        const resp = await fetch(`${BASE_URL}/agendas/${SLUG}`);
        return resp.status === 200;
    };
    
    const createAgenda = async () => {
        const resp = await fetch(`${BASE_URL}/agendas/${SLUG}`, {
            method: "POST"
        });

    return resp.status === 201;
    };

    const loadContacts = async () => {
        const resp = await fetch(`${BASE_URL}/agendas/${SLUG}/contacts`);

        if (!resp.ok) {
            setContacts([]);
            return;
        }

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

const init = async () => {
        const exists = await checkAgenda();

        if (!exists) {
            console.log("Agenda no existe. Creando...");
            await createAgenda();
        }

        await loadContacts();
    };


    useEffect(() => {
        init();
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
