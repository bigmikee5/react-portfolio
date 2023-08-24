import React from "react";

import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Homepage2 from "../components/homepage2/Homepage2";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Homepage2
        heading="CONTACT"
        text="Contact me by filling the form below"
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
