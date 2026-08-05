import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    function addItem(item) {

        setCartItems(previous => [...previous, item]);

    }

    function removeItem(index) {

        setCartItems(previous =>
            previous.filter((_, i) => i !== index)
        );

    }

    function clearCart() {

        setCartItems([]);

    }

    const cartCount = cartItems.length;

    return (

        <CartContext.Provider
            value={{
                cartItems,
                cartCount,
                addItem,
                removeItem,
                clearCart
            }}
        >

            {children}

        </CartContext.Provider>

    );

}

export function useCart() {

    return useContext(CartContext);

}