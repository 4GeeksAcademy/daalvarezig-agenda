import { createBrowserRouter, Navigate } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import AddContact from "./pages/AddContact.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/contacts" replace />
  },
  {
    path: "/contacts",
    element: <Contact />
  },
  {
    path: "/add",
    element: <AddContact />
  },
  {
    path: "/edit/:id",
    element: <AddContact />
 }

]);
