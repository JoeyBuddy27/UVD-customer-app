import React from "react";
import "./Booking.css";

const Booking = () => {
  return (
    <div className="booking">
      <h1>BOOKING</h1>
      <iframe
        title="Booking iframe"
        class="frame"
        src="https://outlook.office365.com/owa/calendar/UVDisinfection@microstrategies.co.uk/bookings/"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Booking;
