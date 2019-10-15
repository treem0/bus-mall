// class ProductArray {
//     constructor(name, id, img) {
//         this.name = name;
//         this.id = id;
//         this.img = img;
//     }
export function getProductsById(someId) {
    let productMatch;
    this.products.forEach(product => {
        if (someId === product.id) {
            productMatch = product;
        }
    });
    return productMatch;
}

export function getRandomProduct() {
    const randomProductIndex = Math.floor(Math.random() * this.products.length);
    return this.products[randomProductIndex];
}


