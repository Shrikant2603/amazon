import React from 'react'
import Subtotal from './Subtotal'
import "./Checkout.css"

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout__left">
          <div className="checkout__left">
            <h2 className='checkout__title'>Shopping cart</h2>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout