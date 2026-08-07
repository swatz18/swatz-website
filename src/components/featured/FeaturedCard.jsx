import { Link } from "react-router-dom";
export default function FeaturedCard({

    image,
    title,
    category,
    description

}) {

    return (

        <div className="featured-card card">

            <div className="image-wrapper card-image">

                <img
                    src={image}
                    alt={title}
                />

            </div>

            <div className="card-content">

                <h3>{title}</h3>

                <p>{description}</p>

                <Link
                    to={`/shop?category=${encodeURIComponent(category)}`}
                    className="featured-link"
                >

                    Explore →

                </Link>

            </div>

        </div>

    );

}