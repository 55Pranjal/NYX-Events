import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../App.css";
import DarkVeil from "./Darkveil";

const AboutPage = () => {
  return (
    <>
      <DarkVeil />
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1>About EventPro</h1>
            <p className="hero-subtitle">
              Creating unforgettable experiences since 2015
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-section">
          <div className="container">
            <div className="section-content">
              <div className="text-content ">
                <h2>Our Story</h2>
                <p>
                  EventPro was founded in 2015 with a simple mission: to create
                  unforgettable experiences that bring people together. What
                  started as a small team of event enthusiasts has grown into a
                  premier event management company known for crafting
                  exceptional gatherings across diverse categories.
                </p>
                <p>
                  Over the years, we've developed expertise in creating events
                  that resonate with audiences. Our team of dedicated
                  professionals handles every aspect of event planning so you
                  can focus on enjoying the experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="about-section alt">
          <div className="container">
            <h2 className="text-center text-white font-bold text-3xl mb-5">
              What We Do
            </h2>
            <p className="section-intro text-center">
              We specialize in curating and managing a wide variety of events to
              create memorable experiences
            </p>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>Music Festivals</h3>
                <p>
                  Curating unforgettable music experiences with top artists and
                  immersive environments
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaPhone />
                </div>
                <h3>Tech Conferences</h3>
                <p>
                  Bringing together innovators and thought leaders in the
                  technology space
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaEnvelope />
                </div>
                <h3>Corporate Events</h3>
                <p>
                  Professional gatherings that foster connections and business
                  growth
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaFacebookF />
                </div>
                <h3>Community Events</h3>
                <p>
                  Building stronger communities through shared experiences and
                  celebrations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>200+</h3>
                <p>Events Organized</p>
              </div>
              <div className="stat-item">
                <h3>95%</h3>
                <p>Attendee Satisfaction</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
              <div className="stat-item">
                <h3>8</h3>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section">
          <div className="container">
            <h2 className="text-center text-white font-bold text-2xl">
              Our Values
            </h2>

            <div className="values-list">
              <div className="value-item">
                <h4>Creativity</h4>
                <p>
                  We believe in innovative event design that creates memorable
                  experiences
                </p>
              </div>
              <div className="value-item">
                <h4>Excellence</h4>
                <p>
                  We're committed to flawless execution and attention to detail
                </p>
              </div>
              <div className="value-item">
                <h4>Community</h4>
                <p>
                  We foster connections between attendees, performers, and
                  speakers
                </p>
              </div>
              <div className="value-item">
                <h4>Diversity</h4>
                <p>
                  We celebrate diverse voices and perspectives in all our events
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Create Something Amazing?</h2>
            <p>
              Whether you're looking to attend our events or partner with us,
              we'd love to hear from you
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Contact Us</button>
              <button className="btn btn-secondary">
                View Upcoming Events
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
