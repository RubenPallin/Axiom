import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store';
import { toast } from 'react-hot-toast';
import { Heart, Share2 } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const products = useStore((state) => state.products);
  const addToCart = useStore((state) => state.addToCart);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-12">Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Por favor selecciona una talla');
      return;
    }
    addToCart({ ...product, selectedSize });
    toast.success('Producto añadido al carrito');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="w-full rounded-lg"
          />
          <div className="grid grid-cols-4 gap-4">
            {product.imagenes_adicionales?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.nombre} vista ${index + 1}`}
                className="w-full rounded-lg cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.nombre}</h1>
            <p className="text-xl text-gray-500 mt-2">{product.marca}</p>
          </div>

          <p className="text-2xl font-semibold">{product.precio.toLocaleString('es-ES', {
            style: 'currency',
            currency: 'EUR'
          })}</p>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Talla</h3>
            <div className="grid grid-cols-4 gap-2">
              {product.tallas.map((talla) => (
                <button
                  key={talla}
                  className={`border rounded-md py-2 text-sm font-medium
                    ${selectedSize === talla
                      ? 'border-black text-black'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  onClick={() => setSelectedSize(talla)}
                >
                  {talla}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Añadir al Carrito
          </button>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
              <Heart className="h-5 w-5" />
              Guardar
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
              <Share2 className="h-5 w-5" />
              Compartir
            </button>
          </div>

          <div className="prose prose-sm">
            <h3 className="text-lg font-medium mb-2">Descripción</h3>
            <p>{product.descripcion}</p>
            
            <h3 className="text-lg font-medium mt-6 mb-2">Detalles</h3>
            <ul className="list-disc pl-4 space-y-1">
              {product.detalles.map((detalle, index) => (
                <li key={index}>{detalle}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;