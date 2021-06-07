import React from 'react'
import { useStateValue } from '../../ContextAPI'
import CheckoutProduct from '../CheckoutProduct'
import Subtotal from '../Subtotal'
import "./index.css"

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="wrap__ad">
                    <img
                        className="checkout__ad"
                        src="./Uploads/Images/images.jpeg"
                        alt=""
                    />
                    <img
                        className="checkout__ad"
                        src="./Uploads/Images/images.jpeg"
                        alt=""
                    />
                </div>
                
                <div>
                    <h5 style={{ marginLeft: 10 }}>Hello, {user?.email}</h5>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
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
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
