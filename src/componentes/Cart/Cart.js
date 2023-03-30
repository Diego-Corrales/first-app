import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from "react-icons/bs"
import { Link } from 'react-router-dom'


// esta funcion se encarga de mostrar el carrito de compras
export const Cart = () => {
    
    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    // si el carrito esta vacio muestra un mensaje y un boton para volver al inicio
    // usamos early return como renderizado condicional
    if (cart.length === 0) {
        return (
            <div className='text-center py-2'>
                <h2 className="text-2xl text-center py-10">No tienes productos en tu carrito de compras</h2>
                <hr className='py-6' />
                <Link to="/Home" className='bg-red-800 px-10 py-2 font-bold text-white rounded-2xl text-2xl'>Volver a inicio</Link>
            </div>
        )
    }
    

    // si el carrito tiene productos, muestra el carrito
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