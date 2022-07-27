import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "15px",
      color: "#FA3E3E",
    },
  })
);
