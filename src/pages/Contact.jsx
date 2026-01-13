import { useState, useEffect } from "react";
import ContactCard from "../components/ContactCard.jsx";
import { useNavigate, useParams } from "react-router-dom";

const BASE_URL = "https://playground.4geeks.com/contact";
const SLUG = "iTopy";

export default function Contact() {

    const navigate = useNavigate ();
    const { id } = useParams();

    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {
        const resp = await fetch(`${BASE_URL}/agendas/${SLUG}/contacts/${id}`);

        if (!resp.ok) return;

        const data = await resp.json();

        setForm({
            name: data.name,
            phone: data.phone,
            email: data.email,
            address: data.address
        });
    };

    useEffect(() => {
        if (id) loadContact();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = id
        
            ? `${BASE_URL}/agendas/${SLUG}/contacts/${id}`
            : `${BASE_URL}/agendas/${SLUG}/contacts`;

        const method = id ? "PUT" : "POST"

        const resp = await fetch(url, {
            method,
            headers: { "Content-Type": "aplication/json"},
            body: JSON.stringify(form)
        });

        if (!resp.ok) {
            alert("Error al guardar contacto");
            return;
        }

        navigate("/contacts");
    };

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

            <h2>{id ? "Editar Contcto" : "Añadir Contacto"}</h2>

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
