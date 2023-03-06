

const Item = ({ item }) => {
    return (
        <div className="flex-row items-center text-center bg-slate-500 rounded-2xl w-80">
            <img src={item.img} alt={item.Banda} className="w-80 h-80 rounded-2xl p-2" />
            <br />
            <h2 className="text-3xl font-bold underline">{item.Banda}</h2>
            <br />
            <p className="text-2xl font-bold">{item.Discografia}</p>
            <br />
            <p className="text-2xl font-bold">{item.Precio}</p>
            <br />
            <p className="text-2xl font-bold">{item.id}</p>
            <br />
        </div>
    )
}

export default Item