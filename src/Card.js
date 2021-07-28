import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import "./Card.css";

export default function MediaCard(props) {
  return (
    <a
      className="card-links"
      href={props.href}
      rel="noopener noreferrer"
      target={props.target}
    >
      <Card className="card">
        <CardActionArea>
          <CardMedia
            className="card-image"
            image={props.image}
            title={props.title}
          />
        </CardActionArea>
      </Card>
    </a>
  );
}
