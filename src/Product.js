import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, price, image, rating}) {

    const [state, dispatch] = useStateValue();

    console.log('item in the basket', state.basket);
    const addToBasket = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id,
                title,
                price,
                image,
                rating
            }
        })
    }


    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <div className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="product__rating">
                        {
                            Array(rating).fill().map((_, i)=> (
                            <p>⭐</p>
                            ))
                        }
                </div>
            </div>
            
            {/* Image of the product */}
            <img src={image} alt="product"/>

            {/* Add to Basket Button */}
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
