import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Cartwidget = () => {
    const {totalCantidad, cart} = useContext(CartContext)
    
    // agregamos el link para que nos lleve al carrito y mediante el operador ternario, si el carrito tiene items, se muestra el icono y el numero de items, sino, no se muestra nada
    return (
        <div>
            <Link to="/cart" className={`hidden md:block bg-red-800 px-6 py-4 rounded-2xl ${cart.length > 0 ? "visible" : "invisible"}`}>
                <div className="flex item1">
                    <GiShoppingCart color="white" size={30} />
                <span className="item2 ml-2 text-3xl font-bold text-white">{totalCantidad()}</span>
                </div>
                <h4 className="text-white">Mi Carrito</h4>
            </Link>
        </div>
    )
}