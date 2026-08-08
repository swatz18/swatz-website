import { useEffect, useRef, useState } from "react";
import "./RibbonReveal.css";

import ribbonGif from "../../assets/images/ribbon/ribbon-swatz.gif";
import ribbonFinal from "../../assets/images/ribbon/ribbon-tied.png";

export default function RibbonReveal() {

    const sectionRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {

                    setIsPlaying(true);

                } else {

                    setIsPlaying(false);

                }

            },

            {
                threshold: 0.5
            }

        );

        if (sectionRef.current) {

            observer.observe(sectionRef.current);

        }

        return () => {

            observer.disconnect();

        };

    }, []);


    useEffect(() => {

        if (!isPlaying) {

            return;

        }

        const timer = setTimeout(() => {

            setIsPlaying(false);

        }, 250);

        return () => {

            clearTimeout(timer);

        };

    }, [isPlaying]);


    return (

        <section
            ref={sectionRef}
            className="ribbon-section"
        >

            <img
                src={isPlaying ? ribbonGif : ribbonFinal}
                className="ribbon-gif"
                alt="Swatz ribbon"
            />

        </section>

    );

}