import React from 'react'
import { useState, useEffect } from 'react';

const Pizza = () => {
    const [pizza, setPizza] = useState({});

    const getPizza = async () => {
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        const pizzaJson = await response.json();
        setPizza(pizzaJson);
    };

    useEffect(() => {
        getPizza();
    }, []);

    return (
        <div className="text-start m-3 p-5">
            <h1>Pizza {pizza.name}</h1>
            <h2>Precio: {pizza.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</h2>
            <h3>Ingredientes:</h3>
            <ul>
                {pizza.ingredients.map((ingrediente, index) => (
                    <li key={index}>🍕 {ingrediente}</li>
                ))}
            </ul>
            <img src={pizza.img} alt="foto" />
            <p>{pizza.desc}</p>
        </div>
    )
}

export default Pizza
