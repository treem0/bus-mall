import productData from './src/api.j';

const PRODUCT_KEY = 'PRODUCTS';

const store = {
    storage: window.localStorage,
    store(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let products = store.get(PRODUCT_KEY);

        if (!products) {
            store.save(PRODUCT_KEY, productData);
            products = productData;
        }
        return products;
    }
};

export default store;