import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import ImageCardOne from "../../assets/world.svg";
import ImageCardTwo from "../../assets/child.svg";
import ImageCardThree from "../../assets/love.svg";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const SecondaryHeader = styled.h2`
  font-weight: 700;
`;

const SectionDescription = styled.p`
  font-weight: 600;
  color: #0fa958;
`;

const AboutButton = styled.button`
  border: none;
  padding: 0.6rem 1.6rem;
  color: black;
  border-radius: 5px;
  background-color: #f2a00f;
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 1.5rem;

  &:hover {
      background-color: black;
      color: white;
      transition: all 0.8s ease-out;
      transform: scale(0.8);
  }
`;

const About = () => {
  return (
    <Wrapper>
      <SecondaryHeader>OUR MISSION</SecondaryHeader>
      <p>Protecting the rights and wellbeing of EVERY child</p>
      <Container>
        <Row>
          <Col sm>
            <Image src={ImageCardOne} alt="" />
            <SectionDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </SectionDescription>
          </Col>
          <Col sm>
            <Image src={ImageCardTwo} alt="" />
            <SectionDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </SectionDescription>
          </Col>
          <Col sm>
            <Image src={ImageCardThree} alt="" />
            <SectionDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </SectionDescription>
          </Col>
        </Row>
      </Container>
      <AboutButton>Learn more...</AboutButton>
    </Wrapper>
  );
};

export default About;
