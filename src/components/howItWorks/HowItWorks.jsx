import "./HowItWorks.css";
import StepCard from "./StepCard";
import { useEffect, useRef, useState } from "react";

import {
    ImagePlus,
    Heart,
    Gift
} from "lucide-react";

const steps = [

    {
        icon: ImagePlus,
        title: "Upload Your Photo",
        description:
            "Share your favourite picture and choose the keepsake you'd love to personalise."
    },

    {
        icon: Heart,
        title: "We Craft It",
        description:
            "Every order is printed, assembled and quality checked with care before it leaves our studio."
    },

    {
        icon: Gift,
        title: "We Deliver",
        description:
            "Beautifully packed and safely delivered across India, ready to be treasured or gifted."
    }

];

export default function HowItWorks() {
   const sectionRef = useRef(null);

   const hasAnimated = useRef(false);

   const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {

        let timers = [];

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (!entry.isIntersecting || hasAnimated.current) {
                    return;
                }

                hasAnimated.current = true;

                setCurrentStep(0);

                timers.push(
                    setTimeout(() => setCurrentStep(1), 200)
                );

                timers.push(
                    setTimeout(() => setCurrentStep(2), 900)
                );

                timers.push(
                    setTimeout(() => setCurrentStep(3), 1600)
                );

            },

            {
                threshold:0.35
            }

        );

        if(sectionRef.current){

            observer.observe(sectionRef.current);

        }

        return ()=>{

            timers.forEach(clearTimeout);

            observer.disconnect();

        };

    },[]);

    return (

        <section
            ref={sectionRef}
            className={`how-section ${currentStep > 0 ? "show" : ""}`}
        >

            <div className="how-header">

                <h2>How It Works</h2>

                <p>
                    Every keepsake begins with a memory.
                    <br />
                    Here's how yours comes to life.
                </p>

            </div>

            <div className="timeline">

                <div className="timeline-track"></div>

                <div className={`timeline-dot ${currentStep > 0 ? "animate" : ""}`}></div>

                {steps.map((step, index) => (

                    <StepCard
                        key={index}
                        {...step}
                        index={index}
                        visible={currentStep >= index + 1}
                    />
                ))}

            </div>

        </section>

    );

}