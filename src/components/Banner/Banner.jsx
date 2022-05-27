import React, { useState } from "react";
import Slide from "react-reveal/Slide";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import { BannerContainer, BannerWrapper } from "../../styles/Styles";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";

const Banner = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <BannerContainer fluid className="banner">
      <BannerWrapper className="banner-wrapper">
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
                      onClick={handleShow}
                    >
                      Donate <i class="fa-solid fa-cedi-sign"></i>
                    </motion.button>
                  </Slide>
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </div>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Donations</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Personal Info
            <Form.Control type="text" placeholder="Full name" />
            <Form.Control type="email" placeholder="Email" />
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl aria-label="Amount (to the nearest dollar)" />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
            <Form.Check
              type="checkbox"
              label="I agree that my submitted data is being collected and stored."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose}>
              Donate
            </Button>
          </Modal.Footer>
        </Modal>

      </BannerWrapper>
    </BannerContainer>
  );
};

export default Banner;
