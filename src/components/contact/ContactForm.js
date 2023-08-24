import "../contact/ContactForm.css";

import React from "react";

function ContactForm() {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Your Name</label>
        <input type="text" />
        <label htmlFor="email">Email Address</label>
        <input type="email" />
        <label htmlFor="subject">Subject</label>
        <input type="text" />
        <label htmlFor="message">Message</label>
        <textarea rows="6" placeholder="Type your message here.."></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
