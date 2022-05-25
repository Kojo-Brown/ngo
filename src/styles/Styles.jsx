import styled from "styled-components";
import BannerBgImg from "../assets/african-orphans.jpg";
import StatsBgImg from "../assets/stats-bg-img.jpg";

// About
export const Wrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

export const SecondaryHeader = styled.h2`
  font-weight: 700;
`;

export const SectionDescription = styled.p`
  font-weight: 600;
  color: #0fa958;
`;

export const AboutButton = styled.button`
  border: none;
  padding: 0.6rem 1.6rem;
  color: black;
  border-radius: 5px;
  background-color: #f2a00f;
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 3.5rem;

  &:hover {
    background-color: black;
    color: white;
    transition: all 0.8s ease-out;
    transform: scale(0.8);
  }
`;

export const ImageWrapper = styled.img`
  width: clamp(40%, 300px, 60%);
  filter: drop-shadow(2px 4px 5px #585858);
`;

// Features
export const Container = styled(Wrapper)`
  margin-top: 8rem;
  padding-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-top: 1px solid;
`;

export const FeatureTitle = styled(SecondaryHeader)`
  margin-bottom: 2rem;
`;

export const FeatureBtn = styled.button`
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

export const CardTitle = styled.h5`
  font-weight: 600;
`;

// Banner
export const BannerContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url(${BannerBgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const BannerWrapper = styled.div`
  padding-top: 2rem;
  padding: 0rem 1rem;
`;

// Statistics
export const StatsWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${StatsBgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  margin-top: 5rem;
  padding-left: 1rem;
  color: green;
`;

export const StatsTitle = styled(SecondaryHeader)`
  padding: 1rem 0rem;
  text-transform: uppercase;
  color: white;
`;
export const StatsSubTitle = styled.h5`
  font-weight: 700;
  color: white;
`;

// Blog
export const BlogContainer = styled.div`
  margin: 0 3rem;
`;

export const BlogWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const BlogTitle = styled.h2`
  font-weight: 700;
  text-align: center;
  margin: 2rem 0;
`;

export const BlogSubTitle = styled.h5`
  font-weight: 600;
  color: #f2a00f;
  margin: 1rem 0;
`;

export const BlogDate = styled.p`
  color: gray;
`;

export const BlogContent = styled.p``;

export const BlogBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 600;
  background-color: black;
  color: white;
  margin-bottom: 2.5rem;
  border: none;

  &:hover {
    background-color: #f2a00f;
    transition: 0.5s ease-out;
  }
`;

// MiniSection
export const MiniSectionContainer = styled.div`
  background-color: #020914;
  color: gray;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const MiniSectionTitle = styled.h3``;

export const MiniSectionImg = styled.img``;

export const MiniSectionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MiniSectionBtnOne = styled.button`
  font-size: 1.3rem;
  background-color: #0fa958;
  border: none;
  padding: 0.5rem 1.5rem;
  color: rgb(255, 255, 255);
  border-radius: 5px;

  &:hover {
    transform: scale(0.8);
    transition: all 0.5s ease-in-out;
  }
`;

export const MiniSectionBtnTwo = styled.button`
  font-size: 1.3rem;
  background-color: #f2a00f;
  border: none;
  padding: 0.5rem 1.5rem;
  color: rgb(255, 255, 255);
  border-radius: 5px;

  &:hover {
    transform: scale(0.8);
    transition: all 0.5s ease-in-out;
  }
`;

export const MiniSectionBtns = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

// Footer
export const FooterContainer = styled.div`
  background-color: black;
  color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  padding: 1rem 3rem;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLogo = styled.h3`
  font-size: 4rem;
`;

export const FooterContent = styled.p`
  line-height: 2;
  margin-top: 2rem;
`;

export const FooterSponsors = styled.div`
  display: flex;
  gap: 2rem;
`;

export const FooterForm = styled.div`
  margin: 2rem 0;
  color: black;
`;
export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 1rem;
  margin-top: 4rem;
`;

export const FooterIcons = styled.img`
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
`;
