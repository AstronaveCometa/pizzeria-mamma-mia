import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzasContext } from '../contexts/PizzasContext';

const Pizza = () => {
    const { id } = useParams();
    const { pizzas, setPizzas } = useContext(PizzasContext);

    const pizza = pizzas.find(p => p.id === id);

    return (
        <div className="text-start m-3 p-5 row">
            <img src={pizza.img} alt="foto" className='col'/>
            <div className='col'>
                <h1>Pizza {pizza.name}</h1>
                <h2>Precio: {pizza.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</h2>
                <h3>Ingredientes:</h3>
                <ul>
                    {pizza.ingredients.map((ingrediente, index) => (
                        <li key={index}>🍕 {ingrediente}</li>
                    ))}
                </ul>
                <p>{pizza.desc}</p>
            </div>
        </div>
    )
}

export default Pizza
