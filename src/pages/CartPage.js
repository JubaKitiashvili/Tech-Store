import React from 'react';
import Cart from '../components/CartPage';
import Hero from '../components/Hero';
import cartBcg from '../images/storeBcg.jpeg';

export default function CartPage(props) {
  return (
    <>
      <Hero img={cartBcg} />
      <Cart history={props.history} />
    </>
  );
}
