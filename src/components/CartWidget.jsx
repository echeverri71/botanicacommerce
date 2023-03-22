import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const CartWidget = () => {
    const [cart, setCart] = useContext(CartContext);

const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
}, 0);

return (
    <>
    <div className="cart">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>{quantity}</span>
    </div>
    </>
);
};

export default CartWidget;