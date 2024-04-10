import React from 'react';
import './Blog.css';

const Product = ({ name, image, price, rating, discount }) => (
  <div className="productt">
    <div className="product-imagee">
      <img src={image} alt={name} />
      {discount && <div className="product-discountt">{discount}% OFF</div>}
    </div>
    <div className="product-infoo">
      <div className="product-names">{name}</div>
      <div className="product-ratingg">
        {Array.from({ length: rating }, (_, i) => (
          <span key={i} role="img" aria-label="star">
            ⭐
          </span>
        ))}
      </div>
      <div className="product-pricee">
        {discount ? (
          <>
            <del>{price}</del> {price * (1 - discount / 100)}
          </>
        ) : (
          price
        )}
      </div>
    </div>
  </div>
);

const products = [
  {
    name: 'Our Classic Chocolate Truffle',
    image: 'https://dummyimage.com/200x200/000/fff',
    price: 549,
    rating: 4.9,
    discount: 9,
  },
  {
    name: 'Fresh Fruits & Roasted Almonds',
    image: 'https://dummyimage.com/200x200/000/fff',
    price: 699,
    rating: 4.9,
  },
  {
    name: 'Chocolate Vanilla Half & Half',
    image: 'https://dummyimage.com/200x200/000/fff',
    price: 549,
    rating: 4.9,
  },
  {
    name: 'Whipped Cream Pineapple Cake',
    image: 'https://dummyimage.com/200x200/000/fff',
    price: 549,
    rating: 4.9,
    discount: 10,
  },
  {
    name: 'Butterscotch Cherry Topped Cheesecake',
    image: 'https://dummyimage.com/200x200/000/fff',
    price: 549,
    rating: 4.9,
    discount: 10,
  },
  {
    name: 'Rasmalai Pista Whipped Cream Cake',
    image: 'https://dummyimage.com/200x200/000/fff',
    price: 675,
    rating: 4.9,
  },
  {
    name: 'O Strawberry Velvet Cake',
    image: 'https://dummyimage.com/200x200/000/fff',
    price: 649,
    rating: 4.9,
  },
  {
    name: 'O Trio Mousse Cake',
    image: 'https://dummyimage.com/200x200/000/fff',
    price: 699,
    rating: 4.9,
  },
];

const ProductList = () => (
  <div className="product-lists">
    {products.map((product, index) => (
      <Product key={index} {...product} />
    ))}
  </div>
);

export default ProductList;