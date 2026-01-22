import { useState, useEffect } from 'react';

export default function AuthDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  const handleRegister = () => {
    window.location.href = '/register';
  };

  const handleProfile = () => {
    // Placeholder for profile page
    window.location.href = '/';
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-full bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded flex items-center justify-between"
      >
        <span>{isLoggedIn ? 'Usuario' : 'Cuenta'}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute bottom-full mb-2 w-full bg-zinc-800 rounded shadow-lg z-10">
          {isLoggedIn ? (
            <>
              <button
                onClick={handleProfile}
                className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-700"
              >
                Perfil
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-700"
              >
                Cerrar sesion
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-700"
              >
                Iniciar sesion
              </button>
              <button
                onClick={handleRegister}
                className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-700"
              >
                Registro
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
