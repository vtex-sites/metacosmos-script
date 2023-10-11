// import React, {useState, useRef} from 'react';
// import './TintButton.css';


// function TintButton() {

//     const [disabledView, setDisabledView] = useState(false);
//     const disabledSync = useRef(false);

//     //Lógica para desabilitar o botão enquanto o widget estiver aberto.
//     async function _onClick() {
//         if (disabledSync.current || disabledView) return;

//         disabledSync.current = true;
//         setDisabledView(true);

//         try {
//         await getWidget();
//         } finally {
//         disabledSync.current = false;
//         setDisabledView(false);
//         }
//     }


//     return (
//         <button id="tint-bttn" onClick={_onClick}>
//             Abrir o provador virtual
//         </button>
//     )
// };

// export default TintButton;