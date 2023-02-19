import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <div>
            <Link to={"/cart"}>
                <span className="material-symbols-outlined">
                shopping_cart
                </span>
            </Link>
            <span>4</span>
        </div>
    )
}

export default CartWidget