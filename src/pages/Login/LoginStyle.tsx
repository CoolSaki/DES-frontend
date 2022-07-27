/** @format */

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import BackgroundImg from "../../assets/images/auth_bg.png";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      minHeight: "100vh",
    },
    contianer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "black",
      flexGrow: 1,
      backgroundImage: `url(${BackgroundImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    mainRoot: {
      display: "flex",
      alignItems: "center",
      maxWidth: "1140px",
      width: "100%",
      boxShadow: "0px 1px 15px -2px rgba(0, 0, 0, 0.1)",
      borderRadius: "12px",
      background: "#fff",
    },
    mainImg: {
      width: "50%",
    },
    main: {
      width: "50%",
      padding: "54px 85px 85px 85px",
      height: "100%",
    },
    logo: {
      width: "131.74px",
      height: "55px",
    },
    title: {
      fontFamily: "Archivo",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: "40px",
      color: "#0C0C0C",
      marginTop: "43px",
      marginBottom: "26px",
    },
  })
);
