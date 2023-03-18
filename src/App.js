
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { Navbar } from "./componentes/Navbar/Navbar";
import { Home } from "./componentes/Home/Home";
import { Merchandising } from "./componentes/Merchandising/Merchandising";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./componentes/Cart/Cart";


// toda la aplicacion esta dentro del CartProvider que se recibe por children y ubicandose en el contexto de CartContext
function App() {
  
  return (
    <CartProvider>

      <BrowserRouter>
        
        <Navbar />      
        
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Merchandising" element={ <Merchandising /> } />
          <Route path="/Discos" element={ <ItemListContainer /> } />
          <Route path="/Discos/:CategoryId" element={ <ItemListContainer /> } />
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> } />
          <Route path="/Cart" element={ <Cart /> } />
        </Routes>

      
      </BrowserRouter>

    </CartProvider>
    
  );
}

export default App;

