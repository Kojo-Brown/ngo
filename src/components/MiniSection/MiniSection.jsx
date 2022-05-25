import React from "react";
import {
  MiniSectionBtnOne,
  MiniSectionBtns,
  MiniSectionBtnTwo,
  MiniSectionContainer,
  MiniSectionImg,
  MiniSectionTitle,
} from "../../styles/Styles";
import Flower from "../../assets/flower.png";

const MiniSection = () => {
  return (
    <MiniSectionContainer>
      <MiniSectionTitle>Donate to Save Children</MiniSectionTitle>
      <MiniSectionImg src={Flower} alt="" />
      <MiniSectionBtns>
        <MiniSectionBtnOne>
          Donate <i class="fa-solid fa-cedi-sign"></i>
        </MiniSectionBtnOne>
        <MiniSectionBtnTwo>
          Volunteer <i class="fa-solid fa-handshake-angle"></i>
        </MiniSectionBtnTwo>
      </MiniSectionBtns>
    </MiniSectionContainer>
  );
};

export default MiniSection;
