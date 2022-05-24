import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImageCardOne from "../../assets/world.svg";
import ImageCardTwo from "../../assets/child.svg";
import ImageCardThree from "../../assets/love.svg";
import { Wrapper, SecondaryHeader, SectionDescription, AboutButton, ImageWrapper } from "../../styles/Styles"

const About = () => {
  return (
    <Wrapper>
      <SecondaryHeader>OUR MISSION</SecondaryHeader>
      <p>Protecting the rights and wellbeing of EVERY child</p>
      <Container>
        <Row>
          <Col sm>
            <ImageWrapper src={ImageCardOne} alt="" />
            <SectionDescription>
              Focus on reaching the most vunerable children across the globe.
            </SectionDescription>
          </Col>
          <Col sm>
            <ImageWrapper src={ImageCardTwo} alt="" />
            <SectionDescription>
              Supporting Allin programs for children in more than 150 countries
              and territories.
            </SectionDescription>
          </Col>
          <Col sm>
            <ImageWrapper src={ImageCardThree} alt="" />
            <SectionDescription>
              Promoting the right and wellbeing of every child, in everything we
              do.
            </SectionDescription>
          </Col>
        </Row>
      </Container>
      <AboutButton>Learn more...</AboutButton>
    </Wrapper>
  );
};

export default About;
