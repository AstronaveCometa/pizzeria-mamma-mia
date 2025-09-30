import React from 'react'
import { useState, useEffect, useContext } from 'react';
import CardPizza from './CardPizza';
import { PizzasContext } from '../contexts/PizzasContext';


const Pizzas = () => {
    const { pizzas, setPizzas } = useContext(PizzasContext);

    return (
        <div className='row g-3 m-3 p-3'>
            {pizzas.map((pizza) => (
                <div className='col-4' key={pizza.id}>
                    <CardPizza
                        key={pizza.id}
                        id={pizza.id}
                        img={pizza.img}
                        name={pizza.name}
                        ingredients={pizza.ingredients}
                        desc={pizza.desc}
                        price={pizza.price}
                    />
                </div>
            ))}
        </div>
    )
}

export default Pizzas
