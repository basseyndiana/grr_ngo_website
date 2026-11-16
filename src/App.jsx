import { useState } from "react";
import "./App.css";
import ContactSection from "./form";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [contactStatus, setContactStatus] = useState("");
  // const [contactSending, setContactSending] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website">
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>GR</span>
          <small>HUMAN RIGHTS</small>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "X" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About Us
          </a>
          <a href="#work" onClick={closeMenu}>
            Our Work
          </a>
          <a href="#involved" onClick={closeMenu}>
            Get Involved
          </a>
          <a href="#contact" className="nav-button" onClick={closeMenu}>
            Contact Us
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">HUMANITY • DIGNITY • JUSTICE</span>

            <h1>
              Every Human Life
              <br />
              Deserves <span>Respect.</span>
            </h1>

            <p>
              We stand for human dignity, defend fundamental rights, and support
              communities working towards a fairer and more peaceful world.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-button">
                Discover Our Work →
              </a>
              <a href="#involved" className="secondary-button">
                Support Our Mission
              </a>
            </div>
          </div>

          <div className="hero-note">
            <span className="green-dot"></span>
            Standing together for a better tomorrow.
          </div>
        </section>

        <section className="intro section" id="about">
          <span className="eyebrow">WHO WE ARE</span>
          <h2>
            Building a world where <span>everyone matters.</span>
          </h2>
          <p>
            We believe every person deserves to live with dignity, freedom, and
            equal opportunities. Our commitment is to support people, promote
            human rights, and create meaningful change through collective
            action.
          </p>
        </section>

        <section className="work section" id="work">
          <span className="eyebrow">WHAT WE DO</span>
          <h2>Our Areas of Focus</h2>

          <div className="work-grid">
            <article className="work-card">
              <span>01</span>
              <h3>Human Rights</h3>
              <p>
                Promoting awareness, equality, justice, and respect for
                fundamental human rights.
              </p>
            </article>

            <article className="work-card">
              <span>02</span>
              <h3>Community Support</h3>
              <p>
                Supporting individuals and communities facing difficult
                circumstances.
              </p>
            </article>

            <article className="work-card">
              <span>03</span>
              <h3>Advocacy</h3>
              <p>
                Encouraging positive change through awareness, engagement, and
                collective action.
              </p>
            </article>
          </div>
        </section>

        <section className="involved section" id="involved">
          <span className="eyebrow">BE PART OF THE CHANGE</span>
          <h2>Change happens when we stand together.</h2>
          <p>
            Your time, voice, and support can help make a meaningful difference
            in people's lives.
          </p>
          <a href="#contact" className="primary-button">
            Get Involved →
          </a>
        </section>

        <section className="contact section" id="contact">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>We would love to hear from you.</h2>
          <p>
            Have a question, need support, or want to work with us? Send us a
            message.
          </p>
          
          <ContactSection />
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">
          <span>GR</span>
          <small>HUMAN RIGHTS</small>
        </a>
        <p>Working together for dignity, justice, and humanity.</p>
        <small>© {new Date().getFullYear()} GR. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
