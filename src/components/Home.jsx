import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { useState, useEffect } from 'react';
//import { pizzas } from '../assets/pizzas.js';



const Home = () => {

    const [pizzas, setPizzas] = useState([]);

    const getPizzas = async () => {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const pizzasJson = await response.json();
        setPizzas(pizzasJson);
    };

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <>
            <Header />
            <ul className='d-flex flex-row justify-content-center row'>
                {pizzas.map(pizza => (

                    <li className='col-4'>
                        <CardPizza
                            key={pizza.id}
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients}
                            img={pizza.img}
                            desc={pizza.desc}
                        />
                    </li>
                ))}
            </ul>

        </>
    )
}

export default Home
