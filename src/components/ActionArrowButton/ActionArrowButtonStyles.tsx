import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: "double 1px transparent",
      borderRadius: "100px",
      backgroundImage:
        "linear-gradient(80.02deg, #298432 -2.61%, #8DC63F 99.87%)",
      transform: "rotate(180deg)",
      backgroundClip: "content-box, border-box",
      backgroundOrigin: "border-box",
      textAlign: "center",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "48px",
      position: "relative",
    },
    btnValue: {
      color: "#fff",
      fontFamily: "Inter",
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "22px",
      transform: "rotate(180deg)",
    },
    icon: {
      position: "absolute",
      top: 15,
      left: 31,
      transform: "rotate(180deg)",
    },
  })
);
