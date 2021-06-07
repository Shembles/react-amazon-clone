import React from 'react'
import { useStateValue } from '../../ContextAPI'
import Order from '../Order'
import "./index.css"

function Orders() {
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                <Order />
            </div>
        </div>
    )
}

export default Orders
