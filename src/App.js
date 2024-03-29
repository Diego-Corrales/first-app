

import { CartProvider } from "./context/CartContext";
import { LoginProvider } from "./context/LoginContext";
import { AppRouter } from "./routes/AppRouter";


// toda la aplicacion esta dentro del CartProvider que se recibe por children y ubicandose en el contexto de CartContext
// importamos el AppRouter que se recibe por children y ubicandose en el contexto de LoginContext
function App() {

  return (
    
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
    
  );
}

export default App;

