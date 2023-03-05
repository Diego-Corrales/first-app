import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { Navbar } from "./componentes/Navbar/Navbar";
/* import { GiShoppingCart } from "react-icons/gi"; */


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div className="items-center justify-center min-h-screen bg-blue-100">
      <Navbar />      
      <ItemListContainer />
      {/* <GiShoppingCart /> */}

    </div>
  );
}

export default App;

