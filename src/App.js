import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import { PlaceToVisit } from "./components/PlaceToVisit";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    // backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/jeju1.jpg"})`,
    background: "#757ce8",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

// 1:52

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  );
}

export default App;
