import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const testimonials = [

    {
        image: "/images/testimonials/customer1.jpg",
        name: "Priya S.",
        place: "Coimbatore",
        review:
            "Absolutely loved the quality. The magnets came out even better than I imagined and made the perfect gift."
    },

    {
        image: "/images/testimonials/customer2.jpg",
        name: "Rahul K.",
        place: "Chennai",
        review:
            "Beautiful craftsmanship and excellent packaging. My family couldn't stop smiling."
    },

    {
        image: "/images/testimonials/customer3.jpg",
        name: "Nisha R.",
        place: "Bangalore",
        review:
            "The colours were vibrant and the print quality was outstanding. Highly recommended!"
    },

    {
        image: "/images/testimonials/customer4.jpg",
        name: "Arjun M.",
        place: "Hyderabad",
        review:
            "Ordered it as an anniversary gift. It became the favourite thing on our refrigerator."
    },

    {
        image: "/images/testimonials/customer5.jpg",
        name: "Deepa V.",
        place: "Madurai",
        review:
            "From ordering to delivery, everything was smooth. It felt truly personalised."
    }

];

export default function Testimonials() {

    return (

        <section className="testimonial-section">

            <div className="testimonial-header">

                <h2>Loved by People. Made for Memories.</h2>

                <p>
                    Every order carries a story.
                    Here's what our customers had to say.
                </p>

            </div>

            <div className="testimonial-grid">

                {testimonials.map((testimonial, index) => (

                    <TestimonialCard
                        key={index}
                        {...testimonial}
                    />

                ))}

            </div>

        </section>

    );

}