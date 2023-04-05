import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Cartwidget = () => {
    const {totalCantidad, cart} = useContext(CartContext)
    
    // agregamos el link para que nos lleve al carrito y mediante el operador ternario, si el carrito tiene items, se muestra el icono y el numero de items, sino, no se muestra nada
    return (
        <div>
            <Link to="/cart" className={`hidden md:block bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 px-6 py-4 rounded-2xl ${cart.length > 0 ? "visible" : "invisible"}`}>
                <div className="flex item1">
                    <GiShoppingCart color="white" size={30} />
                <span className="item2 ml-2 text-3xl font-bold text-white">{totalCantidad()}</span>
                </div>
                <h4 className="text-white font-semibold">Mi Carrito</h4>
            </Link>
        </div>
    )
}