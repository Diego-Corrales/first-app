import { useState } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => {
    // funcion para agregar al carrito
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    
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

    }
    
    if (item.Stock === 0) {
        return (
            <div id="toast-top-left" className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 left-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                <div className="text-md font-normal">No hay stock disponible.</div>
                <Link to="/Discos" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-4 rounded">Volver a Discos</Link>
            </div>
            
        )
    }

    // renderizado condicional mediante && que, cuando el stock es menor a 2 unidades, muestra un mensaje avisando que quedan pocas unidades
    // condicional dentro de otro condicional, que si el stock es menor a 2 unidades, muestra un mensaje avisando que quedan pocas unidades
    return (
        <main className="m-4">
            <div className="bg-stone-400 w-full h-full flex flex-wrap px-8 py-2 rounded-2xl">
                <div className="w-full md:w-1/2 place-self-center">
                    <button onClick={handleVolver} className="rounded-2xl px-10 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 p-2 my-6 italic font-bold text-left text-lg">Volver</button>
                    <br />
                    <h4 className="text-4xl font-bold text-center">{item.banda}</h4>
                    <br />
                    <p className="text-2xl font-bold text-center">{item.Discografia}</p>
                    <br />
                    <p className="font-bold text-center" >{item.Descripcion}</p>
                    <br />
                    <p className="text-2xl font-bold text-center">Precio: AR${item.Precio}</p>
                    <br />
                    { item.Stock <= 2 && 
                        <p className="text-center text-2xl font-bold text-red-600 mb-4">
                            {
                                item.Stock === 1
                                    ? `¡Queda solo 1 unidad!`
                                    : `¡Quedan solo ${item.Stock} unidades!`
                            }
                        </p> 
                    }
                    
                    {/* operador ternario que define si no hay item, agregarlo al carrito, si ya esta en el carrito, brinda opcion de terminar compra */}
                    {
                        isInCart(item.id)
                            ?   <div className="text-center mb-4">
                                    <Link to="/cart" className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 py-2 px-10 rounded-2xl italic font-bold text-lg">Terminar la compra</Link>
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