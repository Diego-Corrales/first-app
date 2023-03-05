import MOCK_DATA from '../Data/MOCK_DATA.json';

const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA);
        }, 2000);
    });
}

export default pedirDatos;