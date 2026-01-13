import { createBrowserRouter, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Contact from "./pages/Contact.jsx";
import AddContact from "./pages/AddContact.jsx";

// Layout principal
const Layout = () => (
  <>
    <Navbar />
    <div className="container my-4">
      <Outlet />
    </div>
    <Footer />
  </>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/contacts" /> },
      { path: "contacts", element: <Contact /> },
      { path: "add", element: <AddContact /> },
      { path: "add-contact/:id", element: <AddContact /> },
    ]
  }
]);
