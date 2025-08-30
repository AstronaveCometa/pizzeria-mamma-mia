import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../assets/pizzas.js';

const Home = () => {
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
