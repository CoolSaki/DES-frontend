import { useState } from "react";
import { useStyles } from "./RegisterStyle";
import authImg from "../../assets/images/auth_img.png";
import logo from "../../assets/icons/logo.png";
import ActionInput from "components/ActionInput/ActionInput";
import ActionSelect from "components/ActionSelect/ActionSelect";
import ActionArrowButton from "components/ActionArrowButton/ActionArrowButton";
import ErrorMsg from "components/ErrorMsg/ErrorMsg";

export const Register = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [select, setSelect] = useState<any>();

  const handleFirstName = (e: any) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e: any) => {
    setLastName(e.target.value);
  };

  const handleSelect = (e: any) => {
    setSelect(e.target.value);
  };

  const handleSign = () => {};
  return (
    <div className={classes.root}>
      <div className={classes.contianer}>
        <div className={classes.mainRoot}>
          <img src={authImg} className={classes.mainImg} />
          <div className={classes.main}>
            <img src={logo} className={classes.logo} />
            <div className={classes.title}>Sign Up</div>
            <div className={classes.inLine}>
              <ActionInput
                title='First Name'
                className={classes.mr10}
                action={(e) => handleFirstName(e)}
                placeholder='First Name'
                value={firstName}
              />
              <ActionInput
                className={classes.ml10}
                title='Last Name'
                action={(e) => handleLastName(e)}
                placeholder='Last Name'
                value={lastName}
              />
            </div>
            <ErrorMsg show={true} value="Please enter a valid email address." className={classes.mt12}/>
            <ActionSelect
              title='Visa Type'
              error='this is error test in action select'
              placeholder='Student	Visa (Public University)'
              items={["visa", "remote", "office"]}
              select={(e) => handleSelect(e)}
            />
            <ActionArrowButton value='Sign Up' onClick={handleSign} />
          </div>
        </div>
      </div>
    </div>
  );
};
