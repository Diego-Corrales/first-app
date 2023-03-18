import { useState } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => {
    // funcion para agregar al carrito
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    console.log (isInCart(item.id))
    
    // cantidad de items a comprar
    const [cantidad, setCantidad] = useState(1)
    
    // funcion para volver atras
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    // funcion para agregar al carrito
    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
        }

        agregarAlCarrito(newItem)

        console.log(newItem)
    }
    
    return (
        <main className="m-4">
            <div className="bg-stone-400 w-full h-full flex flex-wrap px-8 py-2 rounded-2xl">
                <div className="w-full md:w-1/2 place-self-center">
                    <button onClick={handleVolver} className="rounded-2xl px-10 bg-blue-800 p-2 my-6 italic font-bold text-left">Volver</button>
                    <br />
                    <h4 className="text-4xl font-bold text-center">{item.banda}</h4>
                    <br />
                    <p className="text-2xl font-bold text-center">{item.Discografia}</p>
                    <br />
                    <p className="text-2xl font-bold text-center">{item.Precio}</p>
                    <br />
                    
                    {/* operador ternario que define si no hay item, agregarlo al carrito, si ya esta en el carrito, brinda opcion de terminar compra */}
                    {
                        isInCart(item.id)
                            ?   <div className="text-center">
                                    <Link to="/cart" className="bg-green-600 p-2 px-10 rounded-2xl italic font-bold">Terminar la compra</Link>
                                </div>
                            : <ItemCount 
                                    max={item.Stock}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}
                                    handleAgregar={handleAgregar}
                                />
                    }
                    
                    
                </div>
                <div className="flex w-full md:w-1/2 justify-end">
                    <img src={item.img} alt={item.Banda} className="w-4/6 rounded-2xl p-2" />
                </div>
                
            </div>
        </main>
    )
}

export default ItemDetail