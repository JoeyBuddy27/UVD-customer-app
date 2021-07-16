import React from "react";

const MyAccount = () => {
  return (
    <div className="myAccount">
      <h1>MY ACCOUNT</h1>
      <iframe
        className="job-frame"
        is="x-frame-bypass"
        src="https://www.robinwieruch.de/react-hooks-fetch-data"
      ></iframe>
    </div>
  );
};

export default MyAccount;
