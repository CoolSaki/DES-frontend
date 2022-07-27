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
      padding: "54px 85px 61px 85px",
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
    checkRoot: {
      display: "flex",
      alignItems: "center",
      marginBottom: "35px",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "20px",
      color: "#333333",
    },
    checkbox: {
      outline: "1px solid #E9E9E9",
      border: "none",
      marginRight: "11px",
    },
    signBtn: {
      marginBottom: "7px",
    },
    signDes: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "28px",
      color: "#000",
      marginBottom: "26px",
    },
    importantLetter: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "28px",
      color: "#298432",
      marginLeft: "3px",
    },
    signdivLine: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      marginBottom: "29px",
    },
    signdivLineLetter: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "20px",
      color: "#000",
      zIndex: 1,
      background: "#fff",
      width: "fit-content",
      padding: "0 8px",
    },
    divLine: {
      height: "1px",
      width: "100%",
      position: "absolute",
      background: "#E9E9E9",
      top: "50%",
    },
    serviceBtnRoot:{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& :last-child":{
        marginRight: 0,
      },
    },
    serviceBtn:{
      width: "33%",
      marginRight: "20px"
    },
    inLine: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    mr10: {
      marginRight: "10px",
    },
    ml10: {
      marginLeft: "10px",
    },
    mt12: {
      marginTop: "12px",
    },
    md15: {
      marginBottom: "15px",
    },
  })
);
