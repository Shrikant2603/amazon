import React from 'react'
import "./Subtotal.css"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { NumericFormat } from 'react-number-format';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const digit = getBasketTotal(basket);
  console.log(digit)
  return (
    <div className="subtotal">
      <NumericFormat  
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={digit}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button>Proceed to Buy</button>
    </div>
  )
}

export default Subtotal