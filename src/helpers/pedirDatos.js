import MOCK_DATA from '../Data/MOCK_DATA.json';

const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA);
        }, 2000);
    });
}

export default pedirDatos;

export const pedirProductoPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = MOCK_DATA.find((prod) => prod.id === id);
            resolve(producto);
        }, 2000);
    });
}