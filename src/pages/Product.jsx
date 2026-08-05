import Navbar from "../components/layout/Navbar";
import ProductDetails from "../components/product/ProductDetails";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";

export default function Product() {
    useEffect(() => {

        window.scrollTo({

            top: 0,

            behavior: "instant"

        });

}, []);
    return (

        <>
            <Navbar />
            <ProductDetails />
            <Footer />
        </>

    );

}