import './ItemListContainer.scss'


export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="itemlistcontenedor">
            <h2 className="text-3xl font-bold underline">En esta seccion encontraras la lista mas variada y completa de discos y vinilos</h2>
            <br />
            <hr />
            <p className='item_Parrafo'>En esta seccion podras seleccionar el disco de tu preferencia y agregarlo a tu carrito con un simple clic</p>
            {greeting}
        </div>
    )
}

