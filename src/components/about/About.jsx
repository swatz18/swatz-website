import "./About.css";
import Navbar from "../layout/Navbar";
import founderImage from "../../assets/images/about/founder.jpeg";
import workspaceImage from "../../assets/images/about/workspace.jpg";

export default function About() {

    return (

        <>
            <Navbar />

            <main className="about-page">

                {/* =========================
                    HERO
                ========================= */}

                <section className="about-hero">

                    <span className="about-eyebrow">
                        ✦ The Story Behind Swatz ✦
                    </span>

                    <h1>
                        Little things & moments
                        <br />
                        aren't little.
                    </h1>

                    <p>
                        A little story about why I believe
                        the smallest gifts can hold the
                        biggest memories.
                    </p>

                </section>


                {/* =========================
                    FOUNDER STORY
                ========================= */}

                <section className="about-story">

                    <div className="about-story-image">

                        <img
                            src={founderImage}
                            alt="The person behind Swatz"
                        />

                    </div>


                    <div className="about-story-content">

                        <span className="about-section-label">
                            WHERE IT STARTED
                        </span>

                        <h2>
                            It started with
                            <br />
                            a little love.
                        </h2>

                        <p>
                            I've always loved surprising the people
                            I care about with handmade gifts.
                        </p>

                        <p>
                            For me, something made personally has
                            a different kind of value. Even something
                            as simple as a paper and pen can feel
                            more meaningful when you've taken the
                            time to write something yourself and
                            give it to someone.
                        </p>

                        <p>
                            That's where Swatz began — with the
                            simple belief that a gift doesn't have
                            to be big to feel special.
                        </p>

                    </div>

                </section>
                
                {/* =========================
                    WORKSPACE
                ========================= */}

                <section className="about-workspace">

                    <div className="about-workspace-image">

                        <img
                            src={workspaceImage}
                            alt="Swatz workspace"
                        />

                    </div>

                    <div className="about-workspace-content">

                        <span className="about-section-label">
                            MADE HERE
                        </span>

                        <h2>
                            My little corner
                           
                            
                        </h2>

                        <p>
                            This little workspace has seen countless photographs, sketches, experiments, mistakes and happy little accidents. 
                            It's where I play around with ideas until something finally feels right.
                        </p>
                         <br />
                        <p>
                           It’s not a fancy studio, and I don't think it needs to be. It's simply my little space to create, experiment 
                           and make things that I'm genuinely proud to send out into the world.
                        </p>
                         <br />
                        <p>
                           It's a small workspace, but it holds a lot of heart.
                        </p>

                    </div>

                </section>
                {/* =========================
                    CLOSING
                ========================= */}

                <section className="about-closing">

                    <div className="about-closing-content">

                        <span className="about-section-label">
                            FROM SWATZ, WITH LOVE
                        </span>

                        <h2>
                            For the little things
                            <br />
                            that mean a lot.
                        </h2>

                        <p>
                            While we often focus on the bigger things, sometimes we forget to notice the little ones.
                        
                            A tiny photograph. A familiar face. A silly moment. A memory that might look small to someone else but means the world to you.
                        </p>
                        <p>
                            That's what I wanted Swatz to celebrate.
                        </p>

                        <div className="about-closing-sign">
                            — Swatz Magnets
                        </div>

                    </div>

                </section>

            </main>
        </>

    );

}