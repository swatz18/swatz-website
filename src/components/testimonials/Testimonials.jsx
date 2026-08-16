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
        image: `${import.meta.env.BASE_URL}images/testimonials/customer3.jpg`,
        name: "Tharani",
        place: "Ooty",
        review:
            "Ordered personalised magnets for my parents’ anniversary, and they turned out even more beautiful than I imagined. The packaging, quality and little details made the gift feel so personal — they absolutely loved it!"
    },

    {
       image: `${import.meta.env.BASE_URL}images/testimonials/customer4.jpg`,
        name: "Priya",
        place: "Hyderabad",
        review:
            "Got these magnets made for my best friend’s birthday, and honestly, they became the highlight of the gift. The photos were perfectly printed, the quality was amazing, and it felt like gifting a bunch of our memories together"
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