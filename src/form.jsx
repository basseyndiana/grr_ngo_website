import React from "react";
import "./App.css";

export default function ContactSection() {
  const [status, setStatus] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending...");
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "e3f1969a-9866-49b2-98b1-ce2a39dccfb3");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        event.target.reset();
      } else {
        setStatus("Error: " + data.message);
      }
    } catch (error) {
      setStatus("Failed to send. check your internet connection");
    }
  };
  const whatsappNumber = "2348062922531";
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to get in touch with you.",
  );
  const whatsappUri = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="contact section" id="contact">
      <span className="eyebrow">GET IN TOUCH</span>
      <h2>We would love to hear from you.</h2>
      <p>
        Have a question, need support, or want to work with us? Send us a
        message.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your full name" required />

        <input
          type="email"
          name="email"
          placeholder="Your email address"
          required
        />

        <textarea
          name="message"
          placeholder="Write your message..."
          rows="5"
          required
        />

        <div className="btns">
          <button type="submit" className="primary-button">
            Send Message →
          </button>

          <a
            href={whatsappUri}
            className="whatapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp →
          </a>
        </div>

        {status && <p role="status">{status}</p>}
      </form>
    </section>
  );
}
