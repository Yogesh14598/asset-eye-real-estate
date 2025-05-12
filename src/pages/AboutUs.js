import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div>
        <section id="about" className="about-section py-5 mb-4">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-4">About Us</h2>
          <p
            className="about-text mx-auto text-center"
            style={{ maxWidth: "800px" }}
          >
            At <strong>ASSET EYE</strong>, we believe real estate is more than
            just buying and selling property—it's about helping people find the
            place they truly belong. Whether you're searching for your dream
            home, looking to invest, or selling a property that’s meant a lot to
            you, we’re here to guide you every step of the way.
            <br />
            <br />
            With years of experience in the Bengaluru market, our team combines
            local expertise with deep industry knowledge to deliver exceptional
            results. We pride ourselves on honesty, integrity, and personalized
            service that puts your needs first.
            <br />
            <br />
            From first-time buyers to seasoned investors, we work closely with
            our clients to understand their goals and make smart, informed
            decisions in a fast-paced market. With <strong>ASSET EYE</strong>,
            you’re not just working with realtors—you’re working with partners
            who care about your future.
            <br />
            <br />
            <em>Let’s find your place—together.</em>
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default AboutUs