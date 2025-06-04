import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const { name, img, price, seller } = bottle;
    // console.log(bottle);
    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Brand: <small>{seller}</small></p>

            <p>Price: <b>${price}</b></p>
            <button onClick={() => handleAddToCart (bottle)}>Add to Cart</button>
        </div>
    );
};

export default Bottle;