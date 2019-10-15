import { getProductsById, getRandomProduct } from './utils.js';
import { productData } from './api.js';
import ProductArray from './ProductArray.js';


const productImageTags = document.querySelectorAll('img');
const productRadioTags = document.querySelectorAll('input');
const products = new ProductArray(productData);
let productChosen;
let disqualifiedProduct = null;

// productRadioTags.forEach((radioTag) => {
//     radioTag.addEventListener('click', event) => {
//         if (event.target.value === productChosen.id) {
//             productChosen++;
//         }
//     }
// });

const initializeNewProducts = () => {
    const randomProduct1 = products.getRandomProduct();
    let randomProduct2 = products.getRandomProduct();
    let randomProduct3 = products.getRandomProduct();

    while (randomProduct1.id === randomProduct2.id) {
        randomProduct2 = products.getRandomProduct();
    }
    while (randomProduct2.id === randomProduct3.id || randomProduct3.id === randomProduct1) {
        randomProduct3 = products.getRandomProduct();
    }
    
};

initializeNewProducts();