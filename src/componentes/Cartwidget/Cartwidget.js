import { GiShoppingCart } from "react-icons/gi";

export const Cartwidget = () => {
    return (
        <div>
            
            <div className="flex">
                <div className="item1">
                    <GiShoppingCart color="white" size={30} />
                </div>
                <h3 className="item2 ml-2 text-3xl font-bold underline text-white">0</h3>
            </div>
        </div>
    )
}