import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { Navbar } from "./componentes/Navbar/Navbar";
import { Home } from "./componentes/Home/Home";
import { Merchandising } from "./componentes/Merchandising/Merchandising";
/* import { GiShoppingCart } from "react-icons/gi"; */


// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <BrowserRouter>
      
      <Navbar />      
      
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Merchandising" element={ <Merchandising /> } />
        <Route path="/Discos" element={ <ItemListContainer /> } />
      </Routes>

    
    </BrowserRouter>
  );
}

export default App;

