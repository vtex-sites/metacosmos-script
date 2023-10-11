import { createContext } from 'react';

async function getWidget() {
    const widget = document.querySelector("tint-vto")
    widget.addEventListener("addToCart", ({detail}) => {tintToCart(detail)}); 
    
    await widget.open();
}

//Essa seria uma das funções intermediárias.
function tintToCart(cart_contents) {
    setCart(JSON.stringify(cart_contents, null, 4));
};


export default getWidget;