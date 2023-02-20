import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { Navbar } from "./componentes/Navbar/Navbar";


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div>
      <Navbar />      
      <ItemListContainer greeting="Nuestros Productos" />

    </div>
  );
}

export default App;

