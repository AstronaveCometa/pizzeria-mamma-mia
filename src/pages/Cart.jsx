import React from 'react'
import axios from "axios";

import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { token, email } = useContext(UserContext);
  const formateadorMoneda = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });
  let total = 0;
  cart.forEach(pizza => {
    total += pizza.price * pizza.count;
  })

  const pagar = async () => {

    let success = false;
    try {
      let user = email;
      const response = await axios.post("http://localhost:5000/api/checkout", { user, cart });
      console.log('Checkout Response:', response.data);
      success = true;
    } catch (err) {
      console.error('Error de registro del carrito: ', err);
      success = false;
    }

    if (success) {
      alert("El pedido ha sido pagado con éxito!");
      alert("Gracias por preferirnos, vuelva pronto!");
      setCart([]);
    } else {
      alert("Hubo un error al procesar el pago. Intente nuevamente.");
    }
  }

  return (
    <div className='cart'>
      <ul>
        {cart.map((pizza, index) => (
          <li key={pizza.id} className='d-flex flex-row justify-content-start align-items-center gap-3 m-3 p-3 border'>
            <img src={pizza.img} alt={pizza.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <span>Pizza {pizza.name}</span>
            <span>{formateadorMoneda.format(pizza.price * cart[index].count)}</span>
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
      <span className='row'>
        <h2 className='col'>Total: {total.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</h2>
        {token ? <button className='btn btn-primary col' onClick={pagar}>Pagar</button> : null}
      </span>
    </div>
  )
}

export default Cart
