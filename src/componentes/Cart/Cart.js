import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


// esta funcion se encarga de mostrar el carrito de compras
export const Cart = () => {
    
    const { cart } = useContext(CartContext)

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
                        <small>Precio: {prod.Precio}</small>
                        <small>Precio Total: ${prod.Precio * prod.cantidad}</small>

                    </div>
                ))
            }

            <h3>Total de tu compra</h3>
        </div>
    )
}

// continuar en minuto 1:22:00 de la clase 10 de react