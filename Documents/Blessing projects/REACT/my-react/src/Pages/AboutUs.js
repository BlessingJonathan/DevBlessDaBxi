import React from 'react';
import './AboutUs.css'; // Make sure to create this CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About TheWriteInkCo</h1>
      </header>
      <section className="about-us-content">
        <div className="about-us-description">
          <h2>Our Story</h2>
          <p>
            At TheWriteInkCo, we believe that every note you write is an extension of your personal touch. Founded in [Year], our company was born from a passion for high-quality stationery and a love for the art of writing.
          </p>
          <p>
            What started as a small boutique offering handpicked stationery items has grown into a comprehensive collection of premium writing materials. We are dedicated to bringing you products that inspire creativity and make every written word special.
          </p>
        </div>
        <div className="about-us-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide stationery that enhances the writing experience and reflects the individuality of our customers. We are committed to excellence, from the quality of our products to the service we provide.
          </p>
          <p>
            We carefully curate our selection to ensure that every item meets our high standards of craftsmanship and style. Whether you're looking for elegant letterheads, stylish notebooks, or unique writing instruments, TheWriteInkCo is here to meet your needs.
          </p>
        </div>
        <div className="about-us-values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Quality:</strong> We never compromise on the quality of our products.</li>
            <li><strong>Customer Focus:</strong> Your satisfaction is our top priority.</li>
            <li><strong>Innovation:</strong> We are constantly seeking new and creative stationery solutions.</li>
            <li><strong>Sustainability:</strong> We are committed to environmentally friendly practices.</li>
          </ul>
        </div>
        <div className="about-us-team">
          <h2>Meet the Team</h2>
          <p>
            Our team is a group of passionate individuals who share a love for stationery and a commitment to excellence. Each member brings a unique skill set and dedication to making TheWriteInkCo the best place for all your stationery needs.
          </p>
          <p>
            From our founders to our customer service team, we work together to ensure that your experience with us is nothing short of exceptional.
          </p>
        </div>
      </section>
      <footer className="about-us-footer">
        <p>Thank you for visiting TheWriteInkCo. We look forward to helping you find the perfect stationery for your needs!</p>
      </footer>
    </div>
  );
}

export default AboutUs;
