import React from "react";
import JobCard from "./JobCard";
import JobData from "./Jobs.json";

const MyAccount = () => {
  return (
    <div className="myAccount">
      <h1>MY ACCOUNT</h1>
      <h2>My Jobs</h2>
      {JobData.map((job) => (
        <JobCard
          key={job.id}
          customer={job.customer}
          job={job.jobNo}
          date={job.date}
          contact={job.contact}
          visits={job.visits}
          status={job.status}
          email={job.email}
          site={job.site}
          desc={job.desc}
        />
      ))}
    </div>
  );
};

export default MyAccount;
