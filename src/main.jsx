
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { CartContext, CartContextProvider } from './Context/CartContex';


ReactDOM.render(
  <React.StrictMode>


<CartContextProvider>

<BrowserRouter>

  <App />
</BrowserRouter>
</CartContextProvider>



  </React.StrictMode>,
  
  document.getElementById('root'));

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )