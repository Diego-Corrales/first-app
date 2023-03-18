import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Cartwidget = () => {
    const {totalCantidad} = useContext(CartContext)
    
    return (
        <div>
            
            <Link to="/cart" className="hidden md:block bg-red-800 px-6 py-4 rounded-2xl">
                <div className="flex item1">
                    <GiShoppingCart color="white" size={30} />
                <span className="item2 ml-2 text-3xl font-bold text-white">{totalCantidad()}</span>
                </div>
                <h4 className="text-white">Mi Carrito</h4>
            </Link>
        </div>
    )
}