

const Item = ({ item }) => {
    return (
        <div className="flex-row items-center text-center w-80">
            <img src={item.img} alt={item.Banda} className="w-80" />
            <br />
            <hr />
            <h2 className="text-3xl font-bold underline">{item.Banda}</h2>
            <br />
            <hr />
            <p className="text-2xl font-bold">{item.Discografia}</p>
            <br />
            <hr />
            <p className="text-2xl font-bold">${item.Precio}</p>
            <br />
            <hr />
            <p className="text-2xl font-bold">{item.id}</p>
            <br />
            <hr />
        </div>
    )
}

export default Item