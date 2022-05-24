import React from "react";
import { Container } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const Banner = () => {
  return (
    <Container fluid className="banner">
      <div className="banner-wrapper">
        <div className="center heading">
          <span className="give">Give</span> a little. <br></br> Change{" "}
          <span className="a-lot">a lot.</span> <br></br>{" "}
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div style={{ height: 100 }}>
                {isVisible ? (
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
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
