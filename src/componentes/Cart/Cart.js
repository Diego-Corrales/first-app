import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from "react-icons/bs"


// esta funcion se encarga de mostrar el carrito de compras
export const Cart = () => {
    
    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    return (
        <div>
            <h2 className="text-2xl text-center py-2">Tu Carrito de Compras</h2>
            <hr />

            {
                cart.map((prod) => (
                    <div className='py-4' key={prod.id}>
                        <h4 className="text-2xl font-bold">Artista: {prod.banda}</h4>
                        <p className="text-2xl font-bold">Disco: {prod.Discografia}</p>
                        <img src={prod.img} alt={prod.Banda} className="rounded-2xl p-2 w-40" />
                        <p>Cantidad: {prod.cantidad}</p>
                        <small>Precio: AR${prod.Precio}</small>
                        <small>Precio Total: AR${prod.Precio * prod.cantidad}</small>
                        <button onClick={() => eliminarDelCarrito(prod.id)}><BsFillTrashFill/></button>

                    </div>
                ))
            }

            <h3 className='py-4 text-2xl text-lime-800 font-bold'>Total de tu compra: AR${totalCompra()}</h3>
            <button onClick={vaciarCarrito} className='bg-red-800 px-10 rounded-2xl py-2 text-white font-bold text-2xl'>
                Vaciar Carrito
            </button>
        </div>
    )
}