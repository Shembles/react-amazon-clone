import React from 'react'
import "./index.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../ContextAPI'
import { getBasketTotal } from '../../Reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
    const history = useHistory()
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({ basket?.length } items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"R"}
            />
            <button onClick={e => history.push("/payment")}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
