import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import JobData from "./Jobs.json";
import "./JobPage.css";
import heatmap from "./images/heatmap.jpeg";
import Button from "@material-ui/core/Button";

const JobPage = (props) => {
  const { id } = props.match.params;
  const [currentJob, setCurrentJob] = useState([{ jobNo: "somit" }]);

  useEffect(() => {
    async function fetchData() {
      const data = await JobData.filter((job) => job.jobNo === id);
      await setCurrentJob(data);
    }
    fetchData();
  }, [id]);

  console.log(currentJob);

  return (
    currentJob[0].jobNo && (
      <div className="jobPage">
        <h1>
          Job Details: <span className="job-title">{currentJob[0].jobNo}</span>{" "}
        </h1>

        <div className="job-detail">
          <h3>Details</h3>
          <div className="job-detail-inner">
            <p>
              <strong>Job Number:</strong> {currentJob[0].jobNo}
            </p>
            <p>
              <strong>Site:</strong> {currentJob[0].site}
            </p>
            <p>
              <strong>Status:</strong> {currentJob[0].status}
            </p>
            <p>
              <strong>Contact:</strong> {currentJob[0].contact}
            </p>
            <p>
              <strong>Email:</strong> {currentJob[0].email}
            </p>
            <p>
              <strong>Appointment Date:</strong> {currentJob[0].date}
            </p>
            <p>
              <strong>Job Description:</strong> {currentJob[0].desc}
            </p>
          </div>
        </div>
        <div className="job-attachments">
          <h3>Attachments</h3>
          <h4>Heatmap</h4>
          <a href="/heatmap.jpeg">
            <img
              src={heatmap}
              alt="Heatmap Boxing Lab"
              className="job-images"
            />
          </a>
        </div>
      </div>
    )
  );
};

export default JobPage;
