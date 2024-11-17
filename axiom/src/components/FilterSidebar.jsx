import { X } from 'lucide-react';

const FilterSidebar = ({ show, onClose }) => {
  const categories = [
    { id: 'hombre', name: 'Hombre' },
    { id: 'mujer', name: 'Mujer' },
    { id: 'accesorios', name: 'Accesorios' },
    { id: 'nuevo', name: 'Novedades' },
    { id: 'ofertas', name: 'Ofertas' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Negro', 'Blanco', 'Azul', 'Rojo', 'Verde', 'Gris'];

  return (
    <div className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
      md:relative md:transform-none md:opacity-100 md:pointer-events-auto
      ${show ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h2 className="text-lg font-semibold">Filtros</h2>
          <button onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Categorías</h3>
            {categories.map((category) => (
              <label key={category.id} className="flex items-center mb-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="ml-2 text-sm text-gray-600">{category.name}</span>
              </label>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Tallas</h3>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className="border rounded px-3 py-1 text-sm hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Colores</h3>
            {colors.map((color) => (
              <label key={color} className="flex items-center mb-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="ml-2 text-sm text-gray-600">{color}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;