import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountImage from "./images/account.png";
import "./Card.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  //   root: {
  //     height: 250,
  //   },
  //   media: {
  //     height: 150,
  //   },
});

export default function MediaCard(props) {
  const classes = useStyles();

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
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
        </CardActions>
      </Card>
    </a>
  );
}
