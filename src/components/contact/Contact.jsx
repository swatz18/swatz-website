import "./Contact.css";
import Navbar from "../layout/Navbar";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
    const [state, handleSubmit] = useForm("xbgrdvkn");
    
    const formRef = useRef(null);
    const [errors, setErrors] = useState({});
    useEffect(() => {

            if (state.succeeded) {

                formRef.current?.reset();

            }

        }, [state.succeeded]);

    const validateForm = (form) => {

        const newErrors = {};

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const reason = form.reason.value;
        const message = form.message.value.trim();

        if (!name) {
            newErrors.name = "Please enter your name.";
        }

        if (!email) {
            newErrors.email = "Please enter your email address.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!phone) {
            newErrors.phone = "Please enter your phone number.";
        } else if (!/^[6-9]\d{9}$/.test(phone)) {
            newErrors.phone =
                "Please enter a valid 10-digit Indian mobile number.";
        }

        if (!reason) {
            newErrors.reason = "Please select an option.";
        }

        if (!message) {
            newErrors.message = "Please enter your message.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };    

    return (

        <>

            <Navbar />

            <main className="contact-page">

                {/* =========================
                    HERO
                ========================= */}

                <section className="contact-hero">

                    <span className="contact-eyebrow">
                        ✦ GET IN TOUCH ✦
                    </span>

                    <h1>
                        Have something
                        <br />
                        special in mind?
                    </h1>

                    <p>
                        Whether you have a question, a custom idea,
                        or a bulk order in mind, we'd love to hear
                        from you.
                    </p>

                </section>


                {/* =========================
                    CONTACT FORM
                ========================= */}

                <section className="contact-section">

                    <div className="contact-content">


                        {/* LEFT SIDE */}

                        <div className="contact-intro">

                            <span className="contact-section-label">
                                LET'S CREATE SOMETHING
                            </span>

                            <h2>
                                Tell us what's
                                <br />
                                on your mind.
                            </h2>

                            <p>
                                From a little idea to a special
                                occasion, we're always happy to
                                hear what you have in mind.
                            </p>

                            <div className="contact-options">

                                <div className="contact-option">
                                    <span>✦</span>
                                    <p>Custom orders</p>
                                </div>

                                <div className="contact-option">
                                    <span>✦</span>
                                    <p>Bulk & corporate orders</p>
                                </div>

                                <div className="contact-option">
                                    <span>✦</span>
                                    <p>Product questions</p>
                                </div>

                            </div>

                        </div>


                        {/* RIGHT SIDE — FORM */}

                        <form
                            ref={formRef}
                            className="contact-form"
                            onSubmit={(e) => {

                                if (!validateForm(e.currentTarget)) {
                                    e.preventDefault();
                                    return;
                                }

                                handleSubmit(e);

                            }}
                        >

                            <div className="contact-field">

                                <label htmlFor="name">
                                    Your name <span className="required">*</span>
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                />
                                {errors.name && (
                                    <p className="field-error">
                                        {errors.name}
                                    </p>
                                )}

                            </div>


                            <div className="contact-field">

                                <label htmlFor="email">
                                    Email address <span className="required">*</span>
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                />

                                {errors.email && (
                                    <p className="field-error">
                                        {errors.email}
                                    </p>
                                )}

                            </div>


                            <div className="contact-field">

                               <label htmlFor="phone">
                                    Phone number <span className="required">*</span>
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter your 10-digit phone number"
                                    maxLength="10"
                                    inputMode="numeric"
                                    onChange={(e) => {
                                        e.target.value = e.target.value.replace(/\D/g, "");
                                    }}
                                />

                                {errors.phone && (
                                    <p className="field-error">
                                        {errors.phone}
                                    </p>
                                )}

                            </div>


                            <div className="contact-field">

                               <label htmlFor="reason">
                                    What can we help you with? <span className="required">*</span>
                                </label>

                                <select
                                    id="reason"
                                    name="reason"
                                    required
                                >

                                    <option value="">
                                        Select an option
                                    </option>

                                    <option>
                                        Custom order
                                    </option>

                                    <option>
                                        Bulk / Corporate order
                                    </option>

                                    <option>
                                        Order related question
                                    </option>

                                    <option>
                                        Product question
                                    </option>

                                    <option>
                                        Something else
                                    </option>

                                </select>
                                {errors.reason && (
                                    <p className="field-error">
                                        {errors.reason}
                                    </p>
                                )}

                            </div>


                            <div className="contact-field">

                                <label htmlFor="message">
                                    Your message <span className="required">*</span>
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us a little about what you have in mind..."
                                    required
                                />
                                {errors.message && (
                                    <p className="field-error">
                                        {errors.message}
                                    </p>
                                )}

                            </div>


                            <button
                                type="submit"
                                className="contact-submit"
                                disabled={state.submitting}
                            >
                                {state.submitting ? "Sending..." : "Send Message"}
                            </button>
                            {state.succeeded && (
                                <p className="contact-success">
                                    Thank you! Your message has been sent. 💙
                                </p>
                            )}

                            {state.errors && (
                                <p className="contact-error">
                                    Something went wrong. Please try again.
                                </p>
                            )}

                            <p className="contact-note">
                                We usually get back to you within 24 hours.
                            </p>

                        </form>

                    </div>

                </section>

            </main>

        </>

    );

}