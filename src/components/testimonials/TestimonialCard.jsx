import { Star } from "lucide-react";

export default function TestimonialCard({

    image,
    name,
    place,
    review

}) {

    return (

        <div className="testimonial-card">

            <div className="profile-wrapper">

                <img
                    src={image}
                    alt={name}
                    className="profile-image"
                />

            </div>

            <div className="review-quote">

                ❝

            </div>

            <p className="review">

                "{review}"

            </p>

            <div className="review-divider"></div>

            <h4>{name}</h4>
            <div className="stars">

                {[...Array(5)].map((_, index) => (

                    <Star
                        key={index}
                        size={15}
                        fill="#C9A96E"
                        color="#C9A96E"
                    />

                ))}

            </div>

            <span>{place}</span>

        </div>

    );

}