import { GiShoppingCart } from "react-icons/gi";

export const Cartwidget = () => {
    return (
        <div>
            
            <div className="hidden md:block bg-red-800 px-6 py-4 rounded-2xl">
                <div className="flex item1">
                    <GiShoppingCart color="white" size={30} />
                <h3 className="item2 ml-2 text-3xl font-bold text-white">0</h3>
                </div>
                <h4 className="text-white">Mi Carrito</h4>
            </div>
        </div>
    )
}