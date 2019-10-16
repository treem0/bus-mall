import { ProductArray } from './utils.js';
import { productData } from './src/api.js';


const productImageTags = document.querySelectorAll('img');
const productRadioTags = document.querySelectorAll('input');
const productName1 = document.getElementById('product-one');
const productName2 = document.getElementById('product-two');
const productName3 = document.getElementById('product-three');
const products = new ProductArray(productData);


const initializeNewProducts = () => {
    const randomProduct1 = products.getRandomProduct();
    let randomProduct2 = products.getRandomProduct();
    let randomProduct3 = products.getRandomProduct();

    while (randomProduct1.id === randomProduct2.id) {
        randomProduct2 = products.getRandomProduct();
    }
    while (randomProduct2.id === randomProduct3.id || randomProduct1.id === randomProduct3) {
        randomProduct3 = products.getRandomProduct();
    }

    productImageTags.forEach((imageTag, i) => {
        if (i === 0) {
            imageTag.src = randomProduct1.image;
        } else if (i === 1) {
            imageTag.src = randomProduct2.image;
        } else if (i === 2) {
            imageTag.src = randomProduct3.image;
        }
    });

    productRadioTags.forEach((radioTag, i) => {
        if (i === 0) {
            radioTag.src = randomProduct1.id;
        } else if (i === 1) {
            radioTag.src = randomProduct2.id;
        } else if (i === 2) {
            radioTag.src = randomProduct3.id;
        }
    });

    productName1.textContent = randomProduct1.name;
    productName2.textContent = randomProduct2.name;
    productName3.textContent = randomProduct3.name;
    
};

let timesPlayed = 0;

for (let i = 0; i < productRadioTags.length; i++) {
    const radioInput = productRadioTags[i];
    radioInput.addEventListener('click', initializeNewProducts, true); // need to figure out this last true parameter
    timesPlayed++;
    console.log(timesPlayed);
}
initializeNewProducts();


