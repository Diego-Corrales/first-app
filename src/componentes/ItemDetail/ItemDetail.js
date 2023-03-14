import { useNavigate } from "react-router"


const ItemDetail = ({item}) => {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    }
    
    return (
        <div className="bg-orange-300 w-auto h-max container">
            <img src={item.img} alt={item.Banda} className="w-80 h-80 rounded-2xl p-2" />
            <br />
            <br />
            <h4>{item.banda}</h4>
            <br />
            <p className="text-2xl font-bold">{item.Discografia}</p>
            <br />
            <p className="text-2xl font-bold">{item.Precio}</p>
            <br />
            <button onClick={handleVolver} className="rounded-2xl px-10 bg-blue-800 p-2 italic font-bold">Volver</button>
        </div>
    )
}

export default ItemDetail