
const ItemCount = ( {max, cantidad, setCantidad, handleAgregar} ) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handlerRestar = () => {
        cantidad > 1 && setCantidad(cantidad -1)
    }
    

    return (
        <div className='text-center space-y-2'>
            <button onClick={handlerRestar} className="rounded-2xl px-10 bg-blue-800 p-2 italic font-bold">-</button>
            <span className="px-10">{cantidad}</span>
            <button onClick={handleSumar} className="rounded-2xl px-10 bg-blue-800 p-2 italic font-bold">+</button>
            <br/>
            <button onClick={handleAgregar} className="bg-lime-600 rounded-2xl px-16 italic font-bolt p-2 text-lg">Sumar al carrito</button>
        </div>
    )
}

export default ItemCount