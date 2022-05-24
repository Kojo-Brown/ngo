import styled from 'styled-components'

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