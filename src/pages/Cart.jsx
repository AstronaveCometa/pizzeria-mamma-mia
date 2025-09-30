import React from 'react'

import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const formateadorMoneda = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    });
  let total = 0;
  cart.forEach(pizza => {
    total += pizza.price * pizza.count;
  })


  return (
    <div className='cart'>
      <ul>
        {cart.map((pizza, index) => (
          <li key={pizza.id} className='d-flex flex-row justify-content-start align-items-center gap-3 m-3 p-3 border'>
            <img src={pizza.img} alt={pizza.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <span>Pizza {pizza.name}</span>
            <span>{formateadorMoneda.format(pizza.price*cart[index].count)}</span>
            <span>Cantidad: </span>
            <span>
                <button className='boton-menos' onClick={
                    () => {
                        let carrito = [...cart];
                        carrito[index].count = carrito[index].count - 1;
                        if (carrito[index].count < 1) carrito.splice(index, 1);
                        setCart(carrito);
                    }
                }>-</button>
                <span> {cart[index].count} </span>
                <button className='boton-mas' onClick={
                    () => {
                        let carrito = [...cart];
                        carrito[index].count = carrito[index].count + 1;
                        setCart(carrito);
                    }
                }>+</button>
            </span>
            </li>
        ))}
      </ul>
      <h2>Total: {total.toLocaleString("es-CL", {style:"currency", currency:"CLP"})}</h2>
    </div>
  )
}

export default Cart
