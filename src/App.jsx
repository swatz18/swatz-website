import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ShopPage from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CartPage from "./pages/Cart";
import Help from "./pages/Help";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {

    return (
        <CartProvider>
           
             <BrowserRouter>
                <>
                    <ScrollToTop />
                    <Routes>

                        <Route
                            path="/"
                            element={<Home />}
                        />

                        <Route
                            path="/shop"
                            element={<ShopPage />}
                        />
                        <Route
                            path="/product/:id"
                            element={<Product />}
                        />
                        <Route
                            path="/about"
                            element={<About />}
                        />

                        <Route
                            path="/contact"
                            element={<Contact />}
                        />
                        <Route
                            path="/help"
                            element={<Help />}
                        />
                        <Route
                            path="/cart"
                            element={<CartPage />}
                        />

                    </Routes>
                </>    
            </BrowserRouter>
            
        </CartProvider>
    );

}

export default App;