import React from "react";
import "./JobCard.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Link } from "react-router-dom";
import { PinDropRounded } from "@material-ui/icons";

const JobCard = (props) => {
  return (
    <div className="JobCard">
      <Link to={`/my-account/${props.job}`}>
        <Card>
          <div className="card-title">
            <h3>{props.job}</h3>
            <Divider />
          </div>
          <div className="card-inner">
            <div className="left">
              <h5>Site</h5>
              <p>
                <strong>Customer: </strong> {props.customer}
              </p>
              <p>
                <strong>Site: </strong> {props.site}
              </p>
            </div>
            <div className="middle">
              <h5>Jobs</h5>
              <p>
                <strong>Description: </strong> {props.desc}
              </p>
              <p>
                <strong>Status: </strong> {props.status}
              </p>
              <p>
                <strong>Appontment Date: </strong> {props.date}
              </p>
              <p>
                <strong>Contact: </strong> {props.contact}
              </p>
              <p>
                <strong>Email: </strong> {props.email}
              </p>
            </div>
            <div className="right">
              <h5>Visits</h5>
              {props.visits.map((visit, index) => (
                <div className="visit-card" key={`visit${index}`}>
                  {visit} <ThumbUpIcon color="primary" />
                </div>
              ))}
            </div>
          </div>
          <Divider />
          <Button className="job-button" variant="contained" color="primary">
            See Job
          </Button>
        </Card>
      </Link>
    </div>
  );
};

export default JobCard;
