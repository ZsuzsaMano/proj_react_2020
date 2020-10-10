import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Colors from "../constants/colors";
import logo9 from "../images/9.webp";
import logo8 from "../images/8.webp";
import logo7 from "../images/7.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(43),
      height: theme.spacing(36),
    },
    justifyContent: "space-around",
    marginTop: 40,
    marginBottom: 50,
  },
}));

const StyledPaper = withStyles({
  root: {
    fontFamily: "Mate SC, serif",
    //backgroundColor: "",
    backgroundColor: Colors.screens,
    borderRadius: 5,
  },
})(Paper);

const Screens = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>The Latest Blog Posts</h1>
      <div className={classes.root}>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/new-website/">
            <img
              className="image"
              src={logo9}
              width="350px"
              height="290px"
              alt="blog-post-9-logo"
            />
          </a>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/8-university-zsh/">
            <img
              className="image"
              src={logo8}
              width="350px"
              height="290px"
              alt="blog-post-8-logo"
            />
          </a>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/7-react-native/">
            <img
              className="image"
              src={logo7}
              width="350px"
              height="290px"
              alt="blog-post-7-logo"
            />
          </a>
        </StyledPaper>
      </div>
    </div>
  );
};

export default Screens;
