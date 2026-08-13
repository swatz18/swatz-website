import { Link } from "react-router-dom";

export default function FeaturedCard({
    image,
    title,
    category,
    description
}) {

    return (

        <Link
            to={`/shop?category=${encodeURIComponent(category)}`}
            className="featured-card card"
        >

            <div className="image-wrapper card-image">

                <img
                    src={image}
                    alt={title}
                />

            </div>

            <div className="card-content">

                <h3>{title}</h3>

                <p>{description}</p>

                <span className="featured-link">

                    Explore →

                </span>

            </div>

        </Link>

    );

}