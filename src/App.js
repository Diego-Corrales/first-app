import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { Navbar } from "./componentes/Navbar/Navbar";
/* import { GiShoppingCart } from "react-icons/gi"; */


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div>
      <Navbar />      
      <ItemListContainer greeting="Nuestros Productos" />
      {/* <GiShoppingCart /> */}

    </div>
  );
}

export default App;

