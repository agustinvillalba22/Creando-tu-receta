import React from 'react';
import './Header.css'; // Archivo para estilos personalizados del header.

const Header = ({ changeView }) => {
    return (
    <header className="d-flex justify-content-between align-items-center px-4 py-2 bg-light shadow">
      {/* Logo */}
        <div className="d-flex align-items-center">
        <img
          src="/logo.png" // Cambia esta ruta al logo que quieras usar.
            alt="Logo"
            className="me-3"
            style={{ height: '40px' }}
        />
        <h1 className="h5 mb-0">Cocinando tu Receta</h1>
        </div>

    {/* Navegación */}
        <nav className="d-flex align-items-center">
        <button
            className="btn btn-link text-decoration-none text-dark me-3"
            onClick={() => changeView('create-recipe')}
        >
            <i className="bi bi-plus-circle me-2"></i> Crear Receta
        </button>
        <button
            className="btn btn-link text-decoration-none text-dark me-3"
            onClick={() => changeView('recipe-history')}
        >
            <i className="bi bi-journal-text me-2"></i> Mis Recetas
        </button>

        {/* Perfil */}
        <div className="d-flex align-items-center">
            <img
            src="/avatar.png" // Cambia esta ruta al avatar que desees.
            alt="Perfil"
            className="rounded-circle"
            style={{ height: '40px', width: '40px' }}
            />
        </div>
        </nav>
    </header>
    );
};

export default Header;