import React from "react";
import { makeStyles } from "@material-ui/core";
import ImageCard from "./ImageCard";
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const PlaceToVisit = () => {
  const classes = useStyles();
  const checked = useWindowPosition("header"); // using custom hook created
  return (
    <div className={classes.root}>
      <ImageCard checked={checked} />
      <ImageCard checked={checked} />
    </div>
  );
};
