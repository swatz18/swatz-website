import { useEffect, useRef, useState } from "react";
import "./RibbonReveal.css";

import tiedRibbon from "../../assets/images/ribbon/ribbon-tied.png";
import leftRibbon from "../../assets/images/ribbon/left-ribbon.png";
import rightRibbon from "../../assets/images/ribbon/right-ribbon.png";

export default function RibbonReveal() {

    const sectionRef = useRef(null);

    const [joined, setJoined] = useState(false);
    const [wrapped, setWrapped] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {

                    setJoined(true);

                } else {

                    setJoined(false);
                    setWrapped(false);

                }

            },

            {
                threshold: 0.55,
            }

        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();

    }, []);

    useEffect(() => {

        let timer;

        if (joined) {

            timer = setTimeout(() => {

                setWrapped(true);

            }, 800);

        } else {

            setWrapped(false);

        }

        return () => clearTimeout(timer);

    }, [joined]);

    return (

        <section
            ref={sectionRef}
            className="ribbon-section"
        >

            {/* Split Ribbon */}

            <div
                className={`ribbon-wrapper
                ${joined ? "join" : ""}
                ${wrapped ? "hide" : ""}`}
            >

                <img
                    src={leftRibbon}
                    className="left-ribbon"
                    alt=""
                />

                <img
                    src={rightRibbon}
                    className="right-ribbon"
                    alt=""
                />

            </div>

            {/* Tied Ribbon */}

            <img
                src={tiedRibbon}
                className={`tied-ribbon ${wrapped ? "show" : ""}`}
                alt=""
            />

        </section>

    );

}