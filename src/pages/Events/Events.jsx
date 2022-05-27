import React from "react";
import { SecondaryHeader } from "../../styles/Styles";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import eventsData from "./eventsData";

const Events = () => {
  return (
    <div>
      <SecondaryHeader style={{ margin: "1rem 0", textAlign: "center" }}>
        All Events
      </SecondaryHeader>
      <div className="calendar">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={eventsData}
          displayEventEnd="true"
          eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        />
      </div>

    </div>
  );
};

export default Events;
