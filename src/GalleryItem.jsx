// src/GalleryItem.jsx
import React from 'react';

export default function GalleryItem({ item, addToCart }) {
  // Renombramos 'id' a '_id' (o cualquier otro nombre con prefijo '_')
  // ESLint suele ignorar variables que empiezan con _ si no se usan.
  const { id: _id, name, image, description, price, unit } = item;
  // Ahora la variable 'id' no está desestructurada, y '_id' no se usa,
  // pero ESLint a menudo permite eso sin advertencia.
  // El 'id' real del objeto 'item' se sigue pasando correctamente al addToCart.

  const handleAddToCart = () => {
    addToCart(item); // Aquí pasas el objeto 'item' completo, que incluye su 'id' original.
  };

  return (
    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
      <figure>
        <img
          src={item.image.startsWith('/') ? item.image : '/' + item.image}
          alt={name}
          className="img-fluid tm-gallery-img"
        />
        <figcaption>
          <h4 className="tm-gallery-title">{name}</h4>
          <p className="tm-gallery-description">
            {description}
          </p>
          <p className="tm-gallery-price">${price.toLocaleString('es-AR')}{unit}</p>
          <button
            className="btn-agregar btn-agregar:hover"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
        </figcaption>
      </figure>
    </article>
  );
}