import React from "react";
import {
  Card,
  Col,
  Row,
} from "react-bootstrap";
import styled from "styled-components";
import { Wrapper, SecondaryHeader } from "../../styles/Styles";
import Image4 from "../../assets/img4.jpg";
import Image5 from "../../assets/img5.jpg";
import Image6 from "../../assets/img6.jpg";

const Container = styled(Wrapper)`
  margin-top: 8rem;
  padding-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-top: 1px solid;
`;

const FeatureTitle = styled(SecondaryHeader)`
    margin-bottom: 2rem;
`

const FeatureBtn = styled.button`
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #0fa958;
    color: white;

    &:hover {
        background-color: black;
        color: white;
        transition: 0.3s ease-in-out;
        transform: scale(1.2);
    }
`;

const CardTitle = styled.h5`
    font-weight: 600;
`

const Features = () => {
  return (
    <Container>
      <FeatureTitle>FEATURES</FeatureTitle>
      <Row>
        <Col sm>
          <Card.Img variant="top" src={Image4} />
          <Card.Body>
            <CardTitle>Education for Everyone</CardTitle>
            <Card.Text>
              In the XXI century, there are still plenty of countries where
              education is forbidden to women.
            </Card.Text>
            <FeatureBtn>volunteer <i class="fa-solid fa-handshake-angle"></i> </FeatureBtn>
          </Card.Body>
        </Col>
        <Col sm>
          <Card.Img variant="top" src={Image5} />
          <Card.Body>
            <CardTitle>Primary School for Children</CardTitle>
            <Card.Text>
            This cause is meant to raise funds to build a chain of schools in Malawi, Burundi, Djibouti, DR Congo…
            </Card.Text>
            <FeatureBtn>volunteer <i class="fa-solid fa-handshake-angle"></i> </FeatureBtn>
          </Card.Body>
        </Col>
        <Col sm>
          <Card.Img variant="top" src={Image6} />
          <Card.Body>
            <CardTitle>Education to Every Child</CardTitle>
            <Card.Text>
            Our organization stands for the right to education for every child and person on this planet.
            </Card.Text>
            <FeatureBtn>volunteer <i class="fa-solid fa-handshake-angle"></i> </FeatureBtn>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
