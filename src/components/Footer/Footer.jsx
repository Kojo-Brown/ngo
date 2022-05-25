import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterForm,
  FooterIcons,
  FooterLogo,
  FooterSocial,
  FooterSponsors,
  SecondaryHeader,
} from "../../styles/Styles";
import Eu from "../../assets/eu.png";
import Ghana from "../../assets/ghana.png";
import Fb from "../../assets/fb.png";
import YouTube from "../../assets/youtube.png";
import { Button, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-left">
        <FooterLogo>
          All<span className="in">in</span>
        </FooterLogo>
        <FooterContent>
          Every member of Hope strongly believes that we can help a lot by
          donating just a little. We are committed to doing what is necessary,
          not only what is considered politically feasible, to preserve
          rainforests, protect the climate, and uphold human rights. The number
          of people who have taken action with us on our campaigns is enormous.
          So join us, too!
        </FooterContent>

        <FooterSocial>
          <span>Connect with us:</span>
          <FooterIcons src={Fb} alt="" />
          <FooterIcons src={YouTube} alt="" />
        </FooterSocial>
      </div>
      <div className="footer-right">
        <SecondaryHeader>Partners</SecondaryHeader>
        <FooterSponsors>
          <img src={Eu} alt="" />
          <img src={Ghana} alt="" />
        </FooterSponsors>

        <FooterForm>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              as="textarea"
              style={{ height: "100px" }}
              placeholder="Leave a comment here"
            />
            <label>Comment</label>
          </Form.Floating>

          <Button
            variant="success"
            type="submit"
            style={{ marginTop: "2rem", fontWeight: "600" }}
          >
            Submit
          </Button>
        </FooterForm>
      </div>
    </FooterContainer>
  );
};

export default Footer;
