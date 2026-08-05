const CART_KEY = "swatz-cart";

export function getCart() {

    const cart = localStorage.getItem(CART_KEY);

    return cart ? JSON.parse(cart) : [];

}

export function addItem(item) {

    const cart = getCart();

    cart.push(item);

    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

}

export function removeItem(index) {

    const cart = getCart();

    cart.splice(index, 1);

    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

}

export function clearCart() {

    localStorage.removeItem(CART_KEY);

}
export function getCartCount() {

    return getCart().length;

}