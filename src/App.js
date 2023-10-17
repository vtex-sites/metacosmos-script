import {useState, useRef} from 'react';
// import './App.css';

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

  function getCart() { 
    const contentCart = document.querySelector('#cartRa textarea').value
    return JSON.parse(contentCart)
  }


  async function getWidget() {
    const widget = document.querySelector("tint-vto") //É "okay" usar um query selector aqui pois o entrypoint do react é a div#root.
    widget.addEventListener("addToCart", ({detail}) => {tintToCart(detail)}); //O mesmo que acima, esses elementos estão fora do lifecycle do react.
    
    widget.addEventListener("removeFromCart", ( {detail} ) => {
      const currentCart = getCart()
      const idsItems = detail.map(item => item.id)

      const restItems = currentCart.filter( item => {
        return !idsItems.includes(item.id)
      })

      tintToCart(restItems)
    }); //O mesmo que acima, esses elementos estão fora do lifecycle do react.
    
    
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
  
  // console.log(cart)

  return (
    <div className="App">
      <button id="tint-bttn" onClick={_onClick}>
        Abrir o provador virtual
      </button>
      <div id="cartRa">
        <textarea value={cart} hidden></textarea>
      </div>
    </div>
  );
}

export default App;
