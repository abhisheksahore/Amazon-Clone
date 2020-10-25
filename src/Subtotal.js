import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {

    const [state, dispatch] = useStateValue();

    // console.log(state.basket);
    const total_amount = state.basket.reduce((t, e) => t + e.price, 0);

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({state.basket?.length} items): 
                            <p>
                <strong>{value}</strong>
                            </p>
                        </p>
                        <small className='subtotal__gift'>
                             <input type='checkbox'/>
                            This order contains a gift.
                        </small>
                    </>
                )}
                decimalScale = {2}
                value = {total_amount}
                displayType = {'text'}
                thousandSeparator = {true}
                prefix = {'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
