import LandingHero from "../components/landing/LandingHero";
import RibbonReveal from "../components/ribbon/RibbonReveal";
import FeaturedCollections from "../components/featured/FeaturedCollections";
import BestSellers from "../components/bestsellers/BestSellers";
import HowItWorks from "../components/howItWorks/HowItWorks";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/footer/Footer";

export default function Home() {

    return (

        <>
            <LandingHero />
            <RibbonReveal />
            <FeaturedCollections />
            <BestSellers />
            <HowItWorks />
            <Testimonials />
            <Footer />
        </>

    );

}