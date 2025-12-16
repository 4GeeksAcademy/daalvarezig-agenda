import React from "react";
const Footer = () => {
    return (
         <footer className="text-center py-4 mt-5"
           style={{ backgroundColor: "#000", // Fondo negro tech
           borderTop: "2px solid #00eaff", // Línea azul neó
           boxShadow: "0 0 20px #00eaff", // Glow neón
           color: "#00eaff",
           fontFamily: "Roboto Mono, monospace",
         }}
         > 
         <p className="m-0 fw-bold">
            <span className="brand">by iT@py</span> © 2025
            </p>
            </footer>
        );
    };
    
    export default Footer;