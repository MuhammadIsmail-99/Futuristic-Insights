import './header.css';
import heroImage from './assets/img1.png';
import logoImage from './assets/logo.svg'; 

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <a href="/" className="logo">
                    <img src={logoImage} alt="Futuristic Logo" className="logo-image" />
                </a>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><button className="cta">Take Test</button></li>
                </ul>
            </nav>

            <section className="body-container">
                <div className="hero-text">
                    <h1>
                        Discover Your <br /> Future. <span>Redefined.</span>
                    </h1>
                    <p>
                        Futuristic helps you find your ideal career path with personalized recommendations tailored to your skills, passions, and goals.
                    </p>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Person working on a laptop" />
                </div>
            </section>
        </header>
    );
}

export default Header;
