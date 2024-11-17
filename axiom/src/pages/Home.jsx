import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store';

const Home = () => {
  return (
    <div className="relative">
      {/* Sección Hero */}
      <div className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
          className="w-full h-full object-cover"
          alt="Imagen principal"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Bienvenido a AXIOS</h1>
            <p className="text-xl mb-8">Descubre las últimas tendencias en moda</p>
            <Link 
              to="/tienda" 
              className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition"
            >
              Comprar Ahora
            </Link>
          </div>
        </div>
      </div>

      {/* Categorías Destacadas */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Categorías Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard 
            image="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1654&q=80"
            title="Colección Hombre"
            link="/tienda?categoria=hombre"
          />
          <CategoryCard 
            image="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
            title="Colección Mujer"
            link="/tienda?categoria=mujer"
          />
          <CategoryCard 
            image="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
            title="Accesorios"
            link="/tienda?categoria=accesorios"
          />
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ image, title, link }) => (
  <Link to={link} className="relative group overflow-hidden">
    <div className="aspect-w-3 aspect-h-4">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>
    </div>
  </Link>
);

export default Home;