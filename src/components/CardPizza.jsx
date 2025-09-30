import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { PizzasContext } from '../contexts/PizzasContext';

const CardPizza = (props) => {
    const { cart, setCart } = useContext(CartContext);
    const { pizzas, setPizzas } = useContext(PizzasContext);

    return (
        <div className="card">
            <img src={props.img} alt="foto" />
            <h2>Pizza {props.name}</h2>
            <div className="card-body">
                <h3>Ingredientes:</h3>
                <ul>
                    {props.ingredients.map((ingrediente, index) => (
                        <li key={index}>🍕 {ingrediente}</li>
                    ))}
                </ul>
                <p>{props.desc}</p>
                <h2>Precio: {props.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</h2>
                <div className='d-flex flex-row justify-content-around gap-3'>
                    <span className="btn btn-secondary">Ver más...</span>
                    <button className="btn btn-primary"
                        onClick={
                            () => {
                                let carrito = [...cart];
                                let existe = false;
                                let indiceCarrito;
                                for (let i = 0; i < carrito.length; i++) {
                                    if (carrito[i].id === props.id.toUpperCase()) {
                                        existe = true;
                                        indiceCarrito = i;
                                        break;
                                    }
                                }
                                if (existe) {
                                    carrito[indiceCarrito].count = carrito[indiceCarrito].count + 1;
                                    setCart(carrito);
                                } else {
                                    let pizzaAgregar;
                                    for (let j = 0; j < pizzas.length; j++) {
                                        if (pizzas[j].id === props.id) {
                                            pizzaAgregar = {
                                                id: pizzas[j].id,
                                                name: pizzas[j].name,
                                                price: pizzas[j].price,
                                                count: 1,
                                                img: pizzas[j].img
                                            }
                                            j = pizzas.length; // Salir del bucle
                                        }
                                    }
                                    carrito.push(pizzaAgregar);
                                    setCart(carrito);
                                }
                                alert(`Has añadido la pizza ${props.name} al carrito`);
                            }
                        }
                    >🛒 Añadir</button>
                </div>
            </div>
        </div>
    )
}

export default CardPizza
