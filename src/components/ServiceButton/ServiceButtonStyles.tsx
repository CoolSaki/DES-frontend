import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      background: "#F9F9F9",
      borderRadius: "4px",
      border: "1px solid #E9E9E9",
      display:"flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 22px 8px 16px",
      cursor: "pointer",
    },
    icon:{
      width: "24px",
      height: "24px",
    },
    name:{
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "28px",
    },
  })
);
