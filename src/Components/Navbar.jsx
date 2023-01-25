import React from 'react'
import { BsCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Navbar({cart}) {
  console.log(cart)
  return (
    <div className='Navbar'>
        <Link to='/cart' className='link'>
            <BsCartFill />
            {cart.length}
        </Link>
    </div>
  )
}

export default Navbar