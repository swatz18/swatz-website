import "./Shop.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import ProductCard from "./ProductCard";
import { products } from "./products";

const categories = [
    "All",
    "Magnets",
    "Keychains",
    "Pin Badges",
    // "Acrylic Magnets",
    // "Flexi Magnets",
    "Combos"
];

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchParams] = useSearchParams();
    const categoryFromUrl = searchParams.get("category");
    const [visibleProducts, setVisibleProducts] = useState(products);
    const [fade, setFade] = useState(true);    
    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if (
            categoryFromUrl &&
            categories.includes(categoryFromUrl)
        ) {
            setSelectedCategory(categoryFromUrl);
        }

    }, [categoryFromUrl]);  

    useEffect(() => {

        setFade(false);

        const timer = setTimeout(() => {

            const filtered =
                selectedCategory === "All"
                    ? products
                    : products.filter(
                        product =>
                            product.category === selectedCategory
                    );

            setVisibleProducts(filtered);

            setFade(true);

        }, 150);

        return () => clearTimeout(timer);

    }, [selectedCategory]);

    return (
        

        <>    
            <Navbar />
                <section className="shop-section">

                    <div className="section-container">

                        <div className="shop-content">

                            <div className="shop-header">

                                <h1>Shop Our Collections</h1>

                                <p>
                                    Crafted to preserve your favourite moments.
                                </p>

                            </div>

                            <div className="category-pills">

                                {categories.map((category, index) => (

                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`category-pill ${
                                            selectedCategory === category ? "active" : ""
                                        }`}
                                    >
                                        {category}
                                    </button>

                                ))}

                            </div>
                        </div>

                        <div
                            className={`products-grid ${
                                visibleProducts.length === 1 ? "single-product" : ""
                            } ${fade ? "show" : "hide"}`}
                        >

                            {visibleProducts.map((product) => (

                                <ProductCard
                                    key={product.id}
                                    {...product}
                                />

                            ))}

                        </div>
                    </div>        
                </section>
        </>
    );

}