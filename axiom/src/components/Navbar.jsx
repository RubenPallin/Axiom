import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useStore } from '../store';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useStore((state) => state.cart);
  const user = useStore((state) => state.user);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">AXIOS</Link>
          </div>

          {/* Menú Escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/tienda" className="text-gray-600 hover:text-gray-900">Tienda</Link>
            <Link to="/tienda?categoria=nuevo" className="text-gray-600 hover:text-gray-900">Novedades</Link>
            <Link to="/tienda?categoria=ofertas" className="text-gray-600 hover:text-gray-900">Ofertas</Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/carrito" className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              
              {user ? (
                <Link to="/perfil">
                  <User className="h-6 w-6 text-gray-600" />
                </Link>
              ) : (
                <Link to="/iniciar-sesion" className="text-gray-600 hover:text-gray-900">Iniciar Sesión</Link>
              )}
            </div>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/tienda" className="block px-3 py-2 text-gray-600">Tienda</Link>
              <Link to="/tienda?categoria=nuevo" className="block px-3 py-2 text-gray-600">Novedades</Link>
              <Link to="/tienda?categoria=ofertas" className="block px-3 py-2 text-gray-600">Ofertas</Link>
              <Link to="/carrito" className="block px-3 py-2 text-gray-600">Carrito</Link>
              {!user && <Link to="/iniciar-sesion" className="block px-3 py-2 text-gray-600">Iniciar Sesión</Link>}
              {user && <Link to="/perfil" className="block px-3 py-2 text-gray-600">Perfil</Link>}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;