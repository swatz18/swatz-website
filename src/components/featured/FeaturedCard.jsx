export default function FeaturedCard({

    image,
    title,
    description

}) {

    return (

        <article className="featured-card">

            <div className="image-wrapper">

                <img
                    src={image}
                    alt={title}
                />

            </div>

            <div className="card-content">

                <h3>{title}</h3>

                <p>{description}</p>

                <span>

                    Explore →

                </span>

            </div>

        </article>

    );

}