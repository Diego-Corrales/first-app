import { BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Home } from "../componentes/Home/Home";
import { ItemDetailContainer } from "../componentes/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "../componentes/Cart/Cart";
import { Footer } from "../componentes/Footer/Footer";
import { LoginScreen } from "../componentes/LoginScreen/LoginScreen";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
import { Checkout } from "../componentes/Checkout/Checkout";
import { RegisterScreen } from "../componentes/RegisterScreen/RegisterScreen";


// usamos contexto de LoginContext para mostrar el componente Navbar y el Footer solo si el usuario esta logueado y lo consumimos en App
export const AppRouter = () => {

    const { user } = useContext(LoginContext)

    return (
        <BrowserRouter>
            {
            user.logged
            ? <>
                <Navbar />      
          
                <Routes>
                  <Route path="/:Home" element={ <Home /> } />
                  <Route path="/Discos" element={ <ItemListContainer /> } />
                  <Route path="/Discos/:CategoryId" element={ <ItemListContainer /> } />
                  <Route path="/detail/:itemId" element={ <ItemDetailContainer /> } />
                  <Route path="/Cart" element={ <Cart /> } />
                  <Route path="/Checkout" element={ <Checkout /> } />
                </Routes>

                <Footer />
              </>

            : <Routes>
                <Route path="/Login" element={ <LoginScreen /> } />
                <Route path="/register" element={ <RegisterScreen /> } />
                <Route path="*" element={ <Navigate to="/Login" /> } />
              </Routes>
          }
        </BrowserRouter>
    )
}