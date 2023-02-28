import './ItemListContainer.scss'
import cartWidget from './cartWidget.png'

export const ItemListContainer = ({greeting}) => {
    return (
        <div className="itemlistcontenedor">
            <h2 className='item_Titulo'>Tu carrito de compras</h2>
            <img src={cartWidget} alt='carrito' className='logo_Carrito' />
            <h3 className="text-3xl font-bold underline">tailwind</h3>
            <br/>
            <hr/>
            <p className='item_Parrafo'>En esta seccion podras seleccionar el disco de tu preferencia y agregarlo a tu carrito con un simple clic</p>
            {greeting}
        </div>
    )
}