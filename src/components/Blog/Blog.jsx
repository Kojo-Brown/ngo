import React from "react";
import { Col, Ratio, Row } from "react-bootstrap";
import Image7 from "../../assets/bible.jpg";
import {
  BlogContainer,
  BlogWrapper,
  BlogDate,
  BlogSubTitle,
  BlogTitle,
  BlogContent,
  BlogBtn,
} from "../../styles/Styles";
import Vid from "../../assets/turkish-ngo.mp4";

const Blog = () => {
  return (
    <BlogContainer>
      <BlogTitle>Our Blog</BlogTitle>
      <Row>
        <Col sm>
          <div style={{ maxWidth: "100%", height: "auto" }}>
            <Ratio aspectRatio={50}>
              <img type="image/jpg" src={Image7} alt=""/>
            </Ratio>
          </div>
          <BlogWrapper>
            <BlogSubTitle>Education for Everyone</BlogSubTitle>
            <BlogDate>December 29, 2021</BlogDate>
            <BlogContent>
            We often inquire why all the disasters and atrocities, alongside poverty are happening, and – for those who believe – are allowed by higher powers. Poverty has been seen for a very long time and even back
            </BlogContent>
            <BlogBtn>
            Learn More
            </BlogBtn>
          </BlogWrapper>
        </Col>

        <Col sm>
          <div style={{ maxWidth: "100%", height: "auto" }}>
            <Ratio aspectRatio={50}>
              <video src={Vid} frameborder="0"  allowFullScreen title="video" autoPlay="false" controls></video>
            </Ratio>
          </div>
          <BlogWrapper>
            <BlogSubTitle>Education for Everyone</BlogSubTitle>
            <BlogDate>June 11, 2021</BlogDate>
            <BlogContent>
            We stand for preservation of forests, protection of the climate by challenging corporate power and systemic injustice through frontline partnerships and strategic campaigns. We’ll never stop fighting for a greener
            </BlogContent>
            <BlogBtn>
              Learn More
            </BlogBtn>
          </BlogWrapper>
        </Col>
      </Row>
    </BlogContainer>
  );
};

export default Blog;
