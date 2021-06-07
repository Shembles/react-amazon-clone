import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../../ContextAPI'
import { getBasketTotal } from '../../Reducer'
import CheckoutProduct from '../CheckoutProduct'
import "./index.css"
import moment, { now } from "moment";

function Order() {
    const [{ basket }, dispatch] = useStateValue()
    const history = useHistory()

    const handleRestart = () => {
        dispatch({
            type: "EMPTY_BASKET",
        })
        history.push("/")
    }

    return (
        <div className="order">
            <h2>Order</h2>
            <p>{Date(now)}</p>
            <p className="order__id">
                <small>Order Reference No.: {Math.floor(Math.random() * 10000) + 1}</small>
            </p>
            {basket.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"R"}
                />
                <button onClick={handleRestart}>Back to Shopping</button>
        </div>
    )
}

export default Order
