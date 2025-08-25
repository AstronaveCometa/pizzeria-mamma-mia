import React from 'react'

const CardPizza = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="foto" />
            <h2>Pizza {props.name}</h2>
            <div>
                <h3>Ingredientes:</h3>
                <p>🍕 {props.ingredients.join(", ")}</p>
                <h2>Precio: {props.price.toLocaleString("es-CL", {style:"currency", currency:"CLP"})}</h2>
                <div className='d-flex flex-row justify-content-around gap-3'>
                    <span className="btn btn-secondary">Ver más...</span>
                    <span className="btn btn-primary">🛒 Añadir</span>  
                </div>
                
            </div>
        </div>
    )
}

export default CardPizza
