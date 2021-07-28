import React from "react";

const MyAccount = () => {
  return (
    <div className="myAccount">
      <h1>MY ACCOUNT</h1>
      <iframe
        title="My Account"
        className="job-frame"
        is="x-frame-bypass"
        src="https://portal.joblogic.com"
      ></iframe>
    </div>
  );
};

export default MyAccount;
