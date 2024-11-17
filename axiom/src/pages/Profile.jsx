import { useState } from 'react';
import { useStore } from '../store';
import { Package, Heart, MapPin, CreditCard, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Profile = () => {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();
  const [orders] = useState([
    {
      id: '1',
      date: '2024-03-15',
      status: 'Entregado',
      total: 129.99,
      items: 2
    },
    {
      id: '2',
      date: '2024-03-10',
      status: 'En camino',
      total: 89.99,
      items: 1
    }
  ]);

  const handleLogout = () => {
    setUser(null);
    toast.success('Sesión cerrada correctamente');
    navigate('/');
  };

  if (!user) {
    navigate('/iniciar-sesion');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">{user.name?.[0] || user.email[0].toUpperCase()}</span>
              </div>
              <h2 className="text-xl font-semibold">{user.name || 'Usuario'}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>

            <nav className="space-y-2">
              <Link to="/perfil" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-md">
                <Package className="h-5 w-5" />
                <span>Mis Pedidos</span>
              </Link>
              <Link to="/perfil/favoritos" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-md">
                <Heart className="h-5 w-5" />
                <span>Favoritos</span>
              </Link>
              <Link to="/perfil/direcciones" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-md">
                <MapPin className="h-5 w-5" />
                <span>Direcciones</span>
              </Link>
              <Link to="/perfil/pagos" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-md">
                <CreditCard className="h-5 w-5" />
                <span>Métodos de Pago</span>
              </Link>
              <Link to="/configuracion" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Configuración</span>
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-2 text-red-600 hover:bg-red-50 p-2 rounded-md"
              >
                <LogOut className="h-5 w-5" />
                <span>Cerrar Sesión</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Mis Pedidos Recientes</h2>
            </div>
            <div className="divide-y">
              {orders.map((order) => (
                <div key={order.id} className="p-6 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Pedido #{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                      <p className="text-sm text-gray-600">{order.items} productos</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{order.total.toLocaleString('es-ES', {
                        style: 'currency',
                        currency: 'EUR'
                      })}</p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;