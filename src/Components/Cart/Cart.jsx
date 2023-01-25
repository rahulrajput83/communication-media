import React from 'react'
import './Cart.css'
import Item from './Item'



function Cart({ cart, setCart }) {
    
    return (
        <div className='Cart'>
            {cart.length > 0 ? cart.map((e, i) => {
                return (
                    <Item cart={cart} setCart={setCart} key={`item${i}`} i={i} e={e} />
                )
            }) : <span>No Item in cart...</span>}
        </div>
    )
}

export default Cart