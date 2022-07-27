import { useStyles } from "./LoginStyle";
import authImg from "../../assets/images/auth_img.png";
import logo from "../../assets/icons/logo.png";
import ActionInput from "components/ActionInput/ActionInput";
import { useState } from "react";
import ActionSelect from "components/ActionSelect/ActionSelect";
import ActionArrowButton from "components/ActionArrowButton/ActionArrowButton";

export const Login = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [select, setSelect] = useState<any>();

  const handleFirstName = (e: any) => {
    setFirstName(e.target.value);
  };

  const handleSelect = (e: any) => {
    setSelect(e.target.value);
  };

  const handleSign = ()=>{
    
  }

  return (
    <div className={classes.root}>
      <div className={classes.contianer}>
        <div className={classes.mainRoot}>
          <img src={authImg} className={classes.mainImg} />
          <div className={classes.main}>
            <img src={logo} className={classes.logo} />
            <div className={classes.title}>Sign Up</div>
            <ActionInput
              type='password'
              title='First Name'
              action={(e) => handleFirstName(e)}
              placeholder='First Name'
              value={firstName}
            />
            <ActionSelect
              title='Visa Type'
              error='this is error test in action select'
              placeholder='Student	Visa (Public University)'
              items={["visa", "remote", "office"]}
              select={(e) => handleSelect(e)}
            />
            <ActionArrowButton value="Sign Up" onClick={handleSign}/>
          </div>
        </div>
      </div>
    </div>
  );
};
