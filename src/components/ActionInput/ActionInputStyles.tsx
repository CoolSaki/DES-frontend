import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const ActionInputStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainRoot: {
      width: "100%",
    },
    title: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "28px",
      color: "#333333",
      marginBottom: "1px",
    },
    container: {
      position: "relative",
      width: "100%",
      display: "inline-flex",
    },
    root: {
      width: "100%",
      color: "#000",
      background: "#F9F9F9",
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "28px",
      borderRadius: "4px",
      border: "1px solid #F9F9F9",
      padding: "6px 12px",
      boxShadow: "none",
      transitionDelay: "400ms",
      transitionDuration: "1000ms",
      boxSizing: "border-box",
      "&::placeholder": {
        fontFamily: "Inter",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "28px",
        color: "#C2C2C2",
        opacity: 1 /* Firefox */,
      },
      "&:focus-visible": {
        outline: "none",
      },
      "&:focus": {
        outline: "none",
      },
    },
    errorBorder: {
      border: "1px solid #FA3E3E",
    },
    signInIcon:{
      position: "relative",
      marginLeft: "18px",
      color: "#C2C2C2",
      fontSize: "small !important",
      marginTop: "50%",
    },
    showStateIcon:{
      position: "absolute",
      top: "25%",
      right: "16px",
      color: "#C2C2C2",
      cursor: "pointer",
      fontSize: "large !important",
    },
    iconDiv:{
      backgroundColor: "#F9F9F9",
    }
  })
);
