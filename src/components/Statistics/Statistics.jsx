import React from "react";
import { StatsTitle, StatsWrapper, StatsSubTitle } from "../../styles/Styles"
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";


const Statistics = () => {
  return (
    <StatsWrapper>
      <StatsTitle>How can you help?</StatsTitle>
      <div className="stats-container">
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <CountUp start={0} end={8796} duration={5} className="stats-number" /> : null}
            <StatsSubTitle>Numbers of Volunteers</StatsSubTitle>
            <p className="stats-description">We are more than ten thousand <span className="diff">volunteers</span> in different countries.</p>
          </div>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <CountUp start={0} end={92} duration={5} className="stats-number" /> : null}
            <StatsSubTitle>Numbers of Projects</StatsSubTitle>
            <p className="stats-description">Our primary objectives are <span className="diff">philanthropy and social well-being.</span></p>
          </div>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <CountUp start={0} end={17520} duration={5} className="stats-number" /> : null}
            <StatsSubTitle>Numbers of Volunteer Hours</StatsSubTitle>
            <p className="stats-description">Volunteers are a valuable resource to <span className="diff">support</span> the planet.</p>
          </div>
        )}
      </VisibilitySensor>
      </div>
    </StatsWrapper>
  );
};

export default Statistics;
