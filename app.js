import { ProductArray } from './utils.js';
import { productData } from './src/api.js';


const productImageTags = document.querySelectorAll('img');
const productRadioTags = document.querySelectorAll('input');
const productName1 = document.getElementById('product-one');
const productName2 = document.getElementById('product-two');
const productName3 = document.getElementById('product-three');
const products = new ProductArray(productData);

let productsSelected = [];
let timesPlayed = 0;


const initializeNewProducts = () => {
    const randomProduct1 = products.getRandomProduct();
    let randomProduct2 = products.getRandomProduct();
    let randomProduct3 = products.getRandomProduct();

    while (randomProduct1.id === randomProduct2.id) {
        randomProduct2 = products.getRandomProduct();
    }
    while (randomProduct1.id === randomProduct3.id || randomProduct2.id === randomProduct3) {
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
            radioTag.value = randomProduct1.id;
        } else if (i === 1) {
            radioTag.value = randomProduct2.id;
        } else if (i === 2) {
            radioTag.value = randomProduct3.id;
        }
    });

    productName1.textContent = randomProduct1.name;
    productName2.textContent = randomProduct2.name;
    productName3.textContent = randomProduct3.name;
    
};


// const handleRadioButtonClick = (event) => {
//     const radioElement = event.target;
//     timesPlayed++;
// };



function trackProductsClicked(productsSelected, productId) {
    let found = products.getProductById(productsSelected, productId);
    if (!found) {
        found = {
            id: productId,
            selected: 1,
        };
        productsSelected.push(found);
    } else {
        found.selected++;
    }
    


    console.log('Made it Here');
    console.log(found);
    // if (!found) {
    //     const productSelected = { id: productId, selected: 1, shownCount: 1 };
    //     productsSelected.push(productSelected);
    // } else {
    //     found.selected++;
    //     found.shownCount++;
    // }
    
}

productRadioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', (event) => {
        console.log(radioTag.value);
        trackProductsClicked(productsSelected, event.target.value);
        initializeNewProducts();
        console.log(productsSelected);
    });
});

initializeNewProducts();


