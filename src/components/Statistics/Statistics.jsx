import React from "react";
import styled from "styled-components";
import StatsBgImg from "../../assets/stats-bg-img.jpg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const StatsWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url(${StatsBgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  margin-top: 5rem;
  color: white;
`;

const Statistics = () => {
  return (
    <StatsWrapper>
      <h1>Statistics</h1>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <CountUp start={0} end={31000000} duration={5} /> : null}
          </div>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <CountUp start={0} end={1242} duration={5} /> : null}
          </div>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <CountUp start={0} end={987} duration={5} /> : null}
          </div>
        )}
      </VisibilitySensor>
    </StatsWrapper>
  );
};

export default Statistics;
