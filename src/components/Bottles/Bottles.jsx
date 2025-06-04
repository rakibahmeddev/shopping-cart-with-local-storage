import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))

    }, []);


    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
    }

    console.log(cart);

    return (
        <div>
            <p>Bottles length: {bottles.length}</p>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;