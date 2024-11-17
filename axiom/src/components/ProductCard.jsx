import { Link } from 'react-router-dom';
import { useStore } from '../store';
import { toast } from 'react-hot-toast';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success('Producto añadido al carrito');
  };

  return (
    <Link to={`/producto/${product.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={product.imagen}
          alt={product.nombre}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">{product.nombre}</h3>
        <p className="mt-1 text-gray-500">{product.marca}</p>
        <p className="mt-1 font-semibold">{product.precio.toLocaleString('es-ES', {
          style: 'currency',
          currency: 'EUR'
        })}</p>
      </div>
    </Link>
  );
};

export default ProductCard;