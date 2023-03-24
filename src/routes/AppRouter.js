import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Home } from "../componentes/Home/Home";
import { Merchandising } from "../componentes/Merchandising/Merchandising";
import { ItemDetailContainer } from "../componentes/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "../componentes/Cart/Cart";
import { Footer } from "../componentes/Footer/Footer";
import { LoginScreen } from "../componentes/LoginScreen/LoginScreen";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";



export const AppRouter = () => {

    const { user } = useContext(LoginContext)

    return (
        <BrowserRouter>
            {
            user.logged
            ? <>
                <Navbar />      
          
                <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="/Merchandising" element={ <Merchandising /> } />
                  <Route path="/Discos" element={ <ItemListContainer /> } />
                  <Route path="/Discos/:CategoryId" element={ <ItemListContainer /> } />
                  <Route path="/detail/:itemId" element={ <ItemDetailContainer /> } />
                  <Route path="/Cart" element={ <Cart /> } />
                </Routes>

                <Footer />
              </>

            : <Routes>
                <Route path="/Login" element={ <LoginScreen /> } />
                <Route path="*" element={ <Navigate to="/Login" /> } />
              </Routes>
          }
        </BrowserRouter>
    )
}