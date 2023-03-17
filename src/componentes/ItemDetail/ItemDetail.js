import { useState } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react";


const ItemDetail = ({item}) => {
    // funcion para agregar al carrito
    const { agregarAlCarrito } = useContext(CartContext)
    
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
            <div className="bg-stone-400 w-full h-full flex flex-wrap px-8 py-4 rounded-2xl">
                <div className="w-full md:w-1/2 place-self-center text-center">
                    <h4 className="text-4xl font-bold">{item.banda}</h4>
                    <br />
                    <p className="text-2xl font-bold">{item.Discografia}</p>
                    <br />
                    <p className="text-2xl font-bold">{item.Precio}</p>
                    <br />
                    <button onClick={handleVolver} className="rounded-2xl px-10 bg-blue-800 p-2 italic font-bold">Volver</button>
                    <br />
                    
                    <ItemCount 
                        max={item.Stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        handleAgregar={handleAgregar}
                    />
                    
                    
                </div>
                <div className="flex w-full md:w-1/2 justify-end">
                    <img src={item.img} alt={item.Banda} className="w-4/6 rounded-2xl p-2" />
                </div>
                
            </div>
        </main>
    )
}

export default ItemDetail