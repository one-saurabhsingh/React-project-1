import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1><strong><u>Contact Us</u></strong></h1>

        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Your Name" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="Your Mail" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
