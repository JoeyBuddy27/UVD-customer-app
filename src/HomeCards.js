import React from "react";
import accountImage from "./images/account.png";
import bookingImage from "./images/booking.png";
import callImage from "./images/call.png";
import vanImage from "./images/live.png";
import Card from "./Card";

const HomeCards = (props) => {
  const mainLinks = [
    {
      title: "Call Us",
      href: "tel:02030519033",
      image: callImage,
      desc: "Call us now on 020 3051 9033",
      target: "_blank",
    },
    {
      title: "Book Now",
      href: "/booking/",
      image: bookingImage,
      desc: "Use our booking form to request a demo or a service",
      target: "",
    },
    {
      title: "My Account",
      href: "https://portal.joblogic.com/",
      image: accountImage,
      desc: "Login to your account to see job info & documents",
      target: "_blank",
    },
    {
      title: "Van Tracking",
      href: "/van",
      image: vanImage,
      desc: "Live camera feed of our servicing van",
      target: "",
    },
  ];

  return (
    <React.Fragment>
      <h1>CUSTOMER PORTAL</h1>
      <div className="mainLinks">
        {mainLinks.map((link) => (
          <section key={link.title} className="singleCard">
            <Card
              title={link.title}
              description={link.desc}
              href={link.href}
              image={link.image}
              target={link.target}
            />
          </section>
        ))}
      </div>
    </React.Fragment>
  );
};

export default HomeCards;
