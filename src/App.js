import {useState, useRef} from 'react';
import './App.css';

function App() {
  
  //Para a exibição do carrinho.
  const [cart, setCart] = useState('');

  //Para desabilitar o botão enquanto o widget estiver aberto.
  const [disabledView, setDisabledView] = useState(false);
  const disabledSync = useRef(false);


  //Essa seria a função intermediaria que ligaria o widget da Tint com o carrinho.
  function tintToCart(cart_contents) {
    setCart(JSON.stringify(cart_contents, null, 4));
  };


  async function getWidget() {
    const widget = document.querySelector("tint-vto") //É "okay" usar um query selector aqui pois o entrypoint do react é a div#root.
    widget.addEventListener("addToCart", ({detail}) => {tintToCart(detail)}); //O mesmo que acima, esses elementos estão fora do lifecycle do react.
    // widget.addEventListener("removeFromCart", ({detail}) => {tintToCart(detail)}); //O mesmo que acima, esses elementos estão fora do lifecycle do react.
    widget.addEventListener("removeFromCart", ( e ) => {
        console.log(e)
    }); //O mesmo que acima, esses elementos estão fora do lifecycle do react.

    // console.log(widget)
    
    await widget.open();
  }


  //Lógica para desabilitar o botão enquanto o widget estiver aberto.
  async function _onClick() {
    if (disabledSync.current || disabledView) return;

    disabledSync.current = true;
    setDisabledView(true);

    try {
      await getWidget();
    } finally {
      disabledSync.current = false;
      setDisabledView(false);
    }
  }
  

  return (
    <div className="App">
      <button id="tint-bttn" onClick={_onClick}>
        Abrir o provador virtual
      </button>
      <div id="cart">
        <h1> Carrinho </h1>
        <pre id='cart-contents'> {cart} </pre>
      </div>
    </div>
  );
}

export default App;
