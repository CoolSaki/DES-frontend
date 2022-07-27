import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme: Theme) =>
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
    root: {
      position: "relative",
      width: "100%",
      "& i": {
        position: "absolute",
        color: "#82BE3D",
        fontSize: "25px",
        lineHeight: "6px",
        top: 14,
        right: 16,
      },
    },
    container: {
      cursor: "pointer",
      background: "#F9F9F9",
      border: "1px solid #F9F9F9",
      borderRadius: "4px",
      boxShadow: "none",
      color: "#333333",
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "28px",
      padding: "6px 15px",
      width: "100%",
      maxWidth: "100%",
      appearance: "none",
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
