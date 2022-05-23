import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import styles from "./styles.module.css";
import { Container } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import { motion } from "framer-motion";

const slides = [
  "photo-1529156069898-49953e39b3ac",
  "photo-1594708767771-a7502209ff51",
  "photo-1641652058255-737478631471",
  "photo-1527090672219-86b82433c4c8",
  "photo-1539893867126-7ce0b48971ca",
  "photo-1527090820885-efdd40ab2657",
];

const Hero = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: false,
  });

  return (
    <Container className="flex fill flex-wrap">
      {transitions((style, i) => (
        <animated.div
          className={styles.bg}
          style={{
            ...style,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/${slides[i]}?w=1920&q=80&auto=format&fit=crop)`,
          }}
        />
      ))}
      <span className="center heading">
        <span className="give">Give</span> a little. <br></br> Change <span className="a-lot">a lot.</span> <br></br>{" "}
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
      </span>
    </Container>
  );
};

export default Hero;
