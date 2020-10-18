import React from 'react';
import propTypes from 'prop-types';
import defaultImage from './../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  const url = image && image.url;

  return <article className='product'>
    <img src={url || defaultImage} alt={name || 'default name'}/>
    <h4>{name || 'default name'}</h4>
    <p>${price || 3.99}</p>
  </article>;
};

Product.propTypes = {
  image: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired
}

export default Product;
