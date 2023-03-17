
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { Navbar } from "./componentes/Navbar/Navbar";
import { Home } from "./componentes/Home/Home";
import { Merchandising } from "./componentes/Merchandising/Merchandising";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CartContext } from "./context/CartContext";
import { useState } from "react"

// CONTINUAR EN EL MINUTO 00:40:00 DE LA CLASE CONTEXTO

function App() {

  // definimos el estado del carrito y el contexto
  const [cart, setCart] = useState([])

  // definimos la funcion para agregar al carrito
  const agregarAlCarrito = (item) => {
    setCart([...cart, item])
  }
  
  return (
    <CartContext.Provider value={{
      cart,
      agregarAlCarrito
    }}>

    <BrowserRouter>
      
      <Navbar />      
      
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Merchandising" element={ <Merchandising /> } />
        <Route path="/Discos" element={ <ItemListContainer /> } />
        <Route path="/Discos/:CategoryId" element={ <ItemListContainer /> } />
        <Route path="/detail/:itemId" element={ <ItemDetailContainer /> } />
      </Routes>

    
    </BrowserRouter>

    </CartContext.Provider>
    
  );
}

export default App;

