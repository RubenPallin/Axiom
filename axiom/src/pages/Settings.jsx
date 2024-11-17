import { useState } from 'react';
import { useStore } from '../store';
import { toast } from 'react-hot-toast';
import { Save } from 'lucide-react';

const Settings = () => {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    notifications: {
      email: true,
      push: true,
      offers: false
    },
    privacy: {
      profilePublic: true,
      showActivity: true
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, ...formData });
    toast.success('Configuración actualizada correctamente');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Configuración de la Cuenta</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Información Personal */}
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Información Personal
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
              </div>
            </div>

            {/* Notificaciones */}
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Notificaciones
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="email-notifications"
                      name="email-notifications"
                      type="checkbox"
                      checked={formData.notifications.email}
                      onChange={(e) => setFormData({
                        ...formData,
                        notifications: {
                          ...formData.notifications,
                          email: e.target.checked
                        }
                      })}
                      className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="email-notifications" className="font-medium text-gray-700">
                      Notificaciones por email
                    </label>
                    <p className="text-gray-500 text-sm">
                      Recibe actualizaciones sobre tus pedidos y novedades.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="push-notifications"
                      name="push-notifications"
                      type="checkbox"
                      checked={formData.notifications.push}
                      onChange={(e) => setFormData({
                        ...formData,
                        notifications: {
                          ...formData.notifications,
                          push: e.target.checked
                        }
                      })}
                      className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="push-notifications" className="font-medium text-gray-700">
                      Notificaciones push
                    </label>
                    <p className="text-gray-500 text-sm">
                      Recibe notificaciones instantáneas en tu navegador.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      checked={formData.notifications.offers}
                      onChange={(e) => setFormData({
                        ...formData,
                        notifications: {
                          ...formData.notifications,
                          offers: e.target.checked
                        }
                      })}
                      className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="offers" className="font-medium text-gray-700">
                      Ofertas y promociones
                    </label>
                    <p className="text-gray-500 text-sm">
                      Recibe información sobre descuentos y ofertas especiales.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacidad */}
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Privacidad
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="profile-public"
                      name="profile-public"
                      type="checkbox"
                      checked={formData.privacy.profilePublic}
                      onChange={(e) => setFormData({
                        ...formData,
                        privacy: {
                          ...formData.privacy,
                          profilePublic: e.target.checked
                        }
                      })}
                      className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="profile-public" className="font-medium text-gray-700">
                      Perfil público
                    </label>
                    <p className="text-gray-500 text-sm">
                      Permite que otros usuarios vean tu perfil.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="show-activity"
                      name="show-activity"
                      type="checkbox"
                      checked={formData.privacy.showActivity}
                      onChange={(e) => setFormData({
                        ...formData,
                        privacy: {
                          ...formData.privacy,
                          showActivity: e.target.checked
                        }
                      })}
                      className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="show-activity" className="font-medium text-gray-700">
                      Mostrar actividad
                    </label>
                    <p className="text-gray-500 text-sm">
                      Muestra tu actividad reciente en la plataforma.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                <Save className="h-4 w-4" />
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;