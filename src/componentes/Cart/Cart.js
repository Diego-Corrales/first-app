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
            <div className='w-full h-full bg-gradient-to-t from-slate-400 to-slate-600 text-center text-white pb-8'>
                <h2 className="text-3xl text-center py-10">No tienes productos en tu carrito de compras</h2>
                <hr className='py-6' />
                <Link to="/Home" className='bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 px-10 py-2 font-bold text-white rounded-2xl text-2xl'>Volver a inicio</Link>
            </div>
        )
    }
    

    // si el carrito tiene productos, muestra el carrito
    return (
        <div className='h-full w-full bg-gradient-to-t from-slate-400 to-slate-600'>
            <h2 className="text-3xl text-center pt-6 text-white font-semibold">Tu Carrito de Compras</h2>

            {
                cart.map((prod) => (
                    <div className='flex justify-center pt-2' key={prod.id}>

                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img src={prod.img} alt={prod.Banda} className="rounded-2xl p-2 w-48" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-md font-medium text-gray-900 truncate dark:text-white">
                                            Artista: {prod.banda}
                                        </p>
                                        <p className="text-md font-medium text-gray-900 truncate dark:text-white">
                                            Cantidad: {prod.cantidad}
                                        </p>
                                        <p className="text-md font-medium text-gray-900 truncate dark:text-white">
                                            Precio: AR${prod.Precio}
                                        </p>
                                        <p className="text-md font-medium text-gray-900 truncate dark:text-white">
                                            Precio Total: AR${prod.Precio * prod.cantidad}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white px-6">
                                        <p className='px-2 text-md'>Eliminar articulo</p>
                                        <button className='bg-red-700 text-white px-2 py-2 text-2xl' onClick={() => eliminarDelCarrito(prod.id)}><BsFillTrashFill/></button>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                    
                ))
            }

            <h3 className='py-4 text-2xl text-lime-800 font-bold text-center'>Total de tu compra: AR${totalCompra()}</h3>
            <div className='flex justify-evenly pb-4'>
                <button onClick={vaciarCarrito} className='bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 px-10 rounded-2xl py-2 text-white font-bold text-2xl'>
                    Vaciar Carrito
                </button>
                <Link to="/Checkout" className='bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 px-10 py-2 font-bold text-white rounded-2xl text-2xl'>Finalizar Compra</Link>
            </div>
        </div>
    )
}