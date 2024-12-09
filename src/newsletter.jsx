import React, { useState } from 'react';
import "./newsLetter.css"
import newsletterImage from "./assets/newsLetterImage.svg"

function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email submitted:", email);
        // Handle form submission logic here (send email to backend)
    };

    return (
        <div className="container">
            <div className="container-left">
            <h2 className="title">Subscribe to our newsletter</h2>
            <p className="description">
                Subscribe to our newsletter, stay connected. We'll email you with our
                updates and career-related things.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-input"
                        placeholder="Enter your mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="form-button">
                    Subscribe
                </button>
            </form>
            </div>
            <div className="image-container">
                <img src={newsletterImage} alt="Newsletter" className="newsletter-image" />
            </div>
        </div>
    );
}

export default Newsletter;