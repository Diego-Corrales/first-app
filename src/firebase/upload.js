import MOCK_DATA from '../Data/MOCK_DATA.json' assert { type: 'json' };
import { dataBase } from './config.js';
import { addDoc, collection } from 'firebase/firestore';

// esta funcion se ejecuta una sola vez para subir los datos a la base de datos de firebase
// la funcion delete item.id es para eliminar el id que viene en el json
const data = MOCK_DATA.map((item) => {
    delete item.id
    return item
})

// la funcion collection es para crear una coleccion en la base de datos y mediante la funcion addDoc se suben los datos
const productRef = collection(dataBase, 'discos')

data.forEach((item) => {
    addDoc(productRef, item)
})