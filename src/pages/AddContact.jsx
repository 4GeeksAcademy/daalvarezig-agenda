import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const BASE_URL = "https://playground.4geeks.com/contact";
const SLUG = "iTopy";

export default function AddContact() {

    const { id } = useParams();               // <- Si existe, estamos editando
    const navigate = useNavigate();
    const location = useLocation();
    const contactToEdit = location.state?.contact;
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    useEffect(() => {
        if (id && contactToEdit) {
            setForm({
                name: contactToEdit.name,
                phone: contactToEdit.phone,
                email: contactToEdit.email,
                address: contactToEdit.address
            });
        }
    }, [id, contactToEdit]);

    const contactId = contactToEdit?.id;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
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


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const exists = await checkAgenda();
        if (!exists) await createAgenda();


        let resp;

        // UPDATE (PUT)
        if (id && contactId) {
            resp = await fetch(`${BASE_URL}/agendas/${SLUG}/contacts/${contactId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, agenda_slug: SLUG })
            });

            // CREATE (POST)
        } else {
            resp = await fetch(`${BASE_URL}/agendas/${SLUG}/contacts`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({...form, agenda_slug: SLUG})
            });
        }

        if (resp.ok) {
            navigate("/contacts");
        } else {
            alert("Error guardando contacto");
        }
    };

    
    return (
        <div className="container mt-4">
            <h2>{id ? "Editar Contacto" : "Añadir Contacto"}</h2>

            <form onSubmit={handleSubmit} className="mt-3">

                <input type="text" className="form-control mb-2"
                    name="name" placeholder="Nombre"
                    value={form.name} onChange={handleChange}
                />

                <input type="text" className="form-control mb-2"
                    name="phone" placeholder="Teléfono"
                    value={form.phone} onChange={handleChange}
                />

                <input type="email" className="form-control mb-2"
                    name="email" placeholder="Email"
                    value={form.email} onChange={handleChange}
                />

                <input type="text" className="form-control mb-2"
                    name="address" placeholder="Dirección"
                    value={form.address} onChange={handleChange}
                />

                <button className="btn btn-success mt-3">
                    {id ? "Guardar Cambios" : "Crear Contacto"}
                </button>

            </form>
        </div>
    );
}
