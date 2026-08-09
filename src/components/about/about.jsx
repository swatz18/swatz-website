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
                    WHY SMALL THINGS
                ========================= */}

                <section className="about-small-things">

                  <div className="about-small-content">

                      <span className="about-section-label">
                          THE LITTLE THINGS
                      </span>

                      <h2>
                          Small things can
                          <br />
                          hold big memories.
                      </h2>

                      <p>
                          We often focus on the bigger things and forget
                          to notice the little ones. A tiny photograph,
                          a familiar face, or a silly moment might look
                          small, but can hold some of our sweetest memories.
                          That's what I wanted Swatz to celebrate.
                      </p>

                      <div className="about-quote">
                          Small enough to keep. Meaningful enough to stay.
                      </div>

                  </div>

                </section>
                {/* =========================
                    WHY MAGNETS
                ========================= */}

                <section className="about-magnets">

                    <div className="about-magnets-content">

                        <span className="about-section-label">
                            WHY MAGNETS?
                        </span>

                        <h2>
                            Something small,
                            <br />
                            personal, and made to stay.
                        </h2>

                        <div className="about-magnets-copy">

                            <p>
                                I wanted Swatz to live in a very specific
                                little space — magnets. Something you can
                                keep around every day, somewhere you
                                naturally look, and something that can turn
                                a favourite photograph or memory into a
                                little part of your everyday life.
                            </p>

                            <p>
                                A magnet felt like the perfect place for that.
                                It isn't something you put away in a cupboard
                                or bring out only on special occasions.
                                It simply stays there, quietly holding a
                                memory close.
                            </p>

                        </div>

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
                            One little memory
                            <br />
                            at a time.
                        </h2>

                        <p>
                            Every Swatz piece starts here — from choosing
                            the photo to creating the final keepsake.
                            It's a small workspace, but it holds a lot
                            of stories.
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
                            I hope every Swatz piece finds its way to
                            someone who matters to you — and becomes
                            a little reminder of a memory worth keeping.
                        </p>

                        <div className="about-closing-sign">
                            — Swatz
                        </div>

                    </div>

                </section>

            </main>
        </>

    );

}