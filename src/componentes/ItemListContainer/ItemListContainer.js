
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase/config";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])

    const {CategoryId} = useParams();

    console.log(CategoryId);
    
    
    useEffect(() => {
        
        // referencia a la coleccion de firebase
        const productosRef = collection(dataBase, "discos")

        // consumimos la coleccion de firebase
        // obtenemos una respuesta con los documentos de la coleccion y los mapeamos para obtener un array de objetos ademas de agregar el id de cada documento
        getDocs(productosRef)
        .then((res) => {
            const arrayProductos = res.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
            setProductos(arrayProductos)
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


    