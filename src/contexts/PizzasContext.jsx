import { createContext, useState, useEffect } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {

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
    <PizzasContext.Provider value={{ pizzas, setPizzas }}>
      {children}
    </PizzasContext.Provider>
  );
};
export default PizzasProvider;