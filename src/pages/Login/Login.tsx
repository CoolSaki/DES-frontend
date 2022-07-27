import { useStyles } from "./LoginStyle";
import authImg from "../../assets/images/auth_img.png";
import logo from "../../assets/icons/logo.png";
import ActionInput from "components/ActionInput/ActionInput";
import { useState } from "react";

export const Login = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");

  const handleFirstName = (e: any) => {};

  return (
    <div className={classes.root}>
      <div className={classes.contianer}>
        <div className={classes.mainRoot}>
          <img src={authImg} className={classes.mainImg} />
          <div className={classes.main}>
            <img src={logo} className={classes.logo} />
            <div className={classes.title}>Sign Up</div>
            <ActionInput
              title='First Name'
              action={(e) => handleFirstName(e)}
              placeholder='First Name'
              value={firstName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
