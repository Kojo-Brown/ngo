import React from "react";
import { Container } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <Container fluid className="banner">
      <div className="banner-wrapper">
        <div className="center heading">
          <span className="give">Give</span> a little. <br></br> Change{" "}
          <span className="a-lot">a lot.</span> <br></br>{" "}
          <Slide right>
            <motion.button
              size="lg"
              className="cta-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Donate <i class="fa-solid fa-cedi-sign"></i>
            </motion.button>
          </Slide>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
