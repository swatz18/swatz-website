import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const testimonials = [

    {
        image: `${import.meta.env.BASE_URL}images/testimonials/customer1.jpg`,
        name: "Suriya Veera",
        place: "Coimbatore",
        review:
            "Found Swatz Magnets through the personalised keychains my wife gifted me, so they were my first choice for my friends of 8+ years.Last-minute order, delivered in a day, beautifully aligned photos, freebies and a surprise discount — the emotional reaction made it truly unforgettable!"
    },

    {
        image: `${import.meta.env.BASE_URL}images/testimonials/customer2.jpeg`,
        name: "Raji",
        place: "Coimbatore",
        review:
            "Absolutely loved these custom photo magnets!The pictures came out really well, and the magnets are so cute and nicely made. The customization was exactly what I wanted, and the quality is really good. Such a lovely way to turn our favourite memories into something we can see every day. Very happy with my purchase and would definitely recommend!"
    },

    {
        image: `${import.meta.env.BASE_URL}images/testimonials/customer3.jpeg`,
        name: "Hemathi",
        place: "Gobichettiplayam",
        review:
            "Absolutely loved the customised magnets we got for our new shop opening! The designs were top-notch, creative, and exactly what we wanted. The quality was truly unmatchable, with great attention to detail. The entire experience was smooth, and the final product exceeded our expectations. Highly recommended for anyone looking for unique and customised magnets!"
    },

    {
       image: `${import.meta.env.BASE_URL}images/testimonials/customer4.jpeg`,
        name: "Priya",
        place: "Srivillipudhur",
        review:
            "My mom and dad were so happy to see their memories on these beautiful fridge magnets! ❤️ Such a lovely and meaningful keepsake. Thank you for making something so special!"
    },


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