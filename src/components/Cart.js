import React, { useContext } from "react";
import { CartContext } from "../helpers/CartContext";

function Cart() {

    const cart_contents = useContext(CartContext);

    

    return(
        <div id="cart">
            <h1> Carrinho </h1>
            <pre id='cart-contents'> {cart_contents} </pre>
        </div>
    )
};

export default Cart;