// import './ItemListContainer.scss'
import { useEffect, useState } from "react";
import pedirDatos from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);

    const {CategoryId} = useParams();

    console.log(CategoryId);
    
    
    useEffect(() => {

        pedirDatos()
            .then((res) => {
                if (!CategoryId) {
                    setProductos(res);
                } else {
                    setProductos(res.filter((prod) => prod.Category === CategoryId));
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Finalizado");
            })
    }, [CategoryId])

    return (
        <div className="mx-10 my-5 justify-between text-center">
            <h2 className="text-3xl font-bold underline">En esta seccion encontraras la lista mas variada y completa de discos y vinilos</h2>
            <br />
            <hr />
            <ItemList items={productos}/>
        </div>
        
    )

    
}

export default ItemListContainer


    