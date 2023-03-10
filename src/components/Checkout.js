import React from 'react'
import Subtotal from './Subtotal'
import "./Checkout.css"
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout__left">
          <div className="checkout__left">
            <h2 className='checkout__title'>Shopping cart</h2>
            {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout