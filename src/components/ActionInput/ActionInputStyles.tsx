import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const ActionInputStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& i": {
        position: "absolute",
        top: "14px",
        right: "16px",
        color: "#C2C2C2",
      },
    },
    root: {
      width: "100%",
      color: "#000",
      background: "#F9F9F9",
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: 400,
      borderRadius: "4px",
      border: "1px solid #F9F9F9",
      lineHeight: "28px",
      padding: "6px 15px",
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
    error: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "15px",
      color: "#FA3E3E",
      marginTop: "11px",
    },
    errorBorder: {
      border: "1px solid #FA3E3E",
    },
  })
);
