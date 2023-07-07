import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="section" id="contact">
      <div className="section-title">Get in Touch</div>

      <form>
        <div className="form-title">Have questions? <br /> Send us an email.</div>

        <input type="text" placeholder="Name"  required/>
        <input type="email" placeholder="Email address" required />
        <textarea placeholder="Message"></textarea>
        <button type="submit" className="send">Submit</button>

      </form>
    </div>
  );
};

export default Contact;
