export default function BestSellerCard({

    category,
    title,
    price,
    image

}){

    return(

        <article className="bestseller-card">

            <div className="bestseller-image">

                <img
                    src={image}
                    alt={title}
                />

            </div>

            <div className="bestseller-content">

                <span className="category">

                    {category}

                </span>

                <h3>

                    {title}

                </h3>

                <div className="bottom-row">

                    <span className="price">

                        {price}

                    </span>

                    <span className="action">

                        Personalise →

                    </span>

                </div>

            </div>

        </article>

    )

}