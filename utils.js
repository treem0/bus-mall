export class ProductArray {
    constructor(products) {
        this.products = products.slice();
    }
    getProductById(products, someId) {
        let productMatch;
        products.forEach(product => {
            if (someId === product.id) {
                productMatch = product;
            }
        });

        return productMatch;
    }

    getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);
    
        return this.products[randomProductIndex];
    }
}

export const compare = (products, id) => {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.id === id) {
            return product;
        }
    }
};
