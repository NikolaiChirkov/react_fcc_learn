import React from 'react';
import propTypes from 'prop-types';
import defaultImage from './../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  return <article className='product'>
    <img src={image.url} alt={name}/>
    <h4>{name}</h4>
    <p>${price}</p>
  </article>;
};

Product.propTypes = {
  image: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired
}

Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: defaultImage
}

export default Product;
