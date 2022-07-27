import { useState } from "react";
import { useStyles } from "./RegisterStyle";
import authImg from "../../assets/images/auth_img.png";
import logo from "../../assets/icons/logo.png";
import ActionInput from "components/ActionInput/ActionInput";
import ActionSelect from "components/ActionSelect/ActionSelect";
import ActionArrowButton from "components/ActionArrowButton/ActionArrowButton";
import ErrorMsg from "components/ErrorMsg/ErrorMsg";
import ServiceButton from "components/ServiceButton/ServiceButton";
import { SERVICEBUTTON } from "config/constant";

export const Register = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [select, setSelect] = useState<any>();

  const handleFirstName = (e: any) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e: any) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleConPassword = (e: any) => {
    setConPassword(e.target.value);
  };

  const handleSelect = (e: any) => {
    setSelect(e.target.value);
  };

  //-----------------service button function ----------------------
  const handleGoogle = () => {};

  const handleFacebook = () => {};

  const handleApple = () => {};

  const handleSign = () => {};
  return (
    <div className={classes.root}>
      <div className={classes.contianer}>
        <div className={classes.mainRoot}>
          <img src={authImg} className={classes.mainImg} />
          <div className={classes.main}>
            <img src={logo} className={classes.logo} />
            <div className={classes.title}>Sign Up</div>
            <div className={classes.md15}>
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
              <ErrorMsg
                show={true}
                value='Please enter a valid email address.'
                className={classes.mt12}
              />
            </div>
            <div className={classes.md15}>
              <ActionInput
                title='Email Address'
                action={(e) => handleEmail(e)}
                placeholder='Email'
                value={email}
              />
              <ErrorMsg
                show={true}
                value='Please enter a valid email address.'
                className={classes.mt12}
              />
            </div>
            <div className={classes.md15}>
              <ActionSelect
                title='Visa Type'
                error='this is error test in action select'
                placeholder='Student	Visa (Public University)'
                items={["visa", "remote", "office"]}
                select={(e) => handleSelect(e)}
              />
            </div>
            <div className={classes.md15}>
              <div className={classes.inLine}>
                <ActionInput
                  type='password'
                  title='Password'
                  className={classes.mr10}
                  action={(e) => handlePassword(e)}
                  placeholder='Password'
                  value={password}
                />
                <ActionInput
                  type='password'
                  title='Confirm	Password'
                  className={classes.ml10}
                  action={(e) => handleConPassword(e)}
                  placeholder='Confirm	Password'
                  value={conPassword}
                />
              </div>
              <ErrorMsg
                show={true}
                value='Please enter a valid email address.'
                className={classes.mt12}
              />
            </div>
            <div className={classes.checkRoot}>
              <input type='checkbox' className={classes.checkbox} />I agree to
              the Terms & Conditions
            </div>
            <ActionArrowButton
              className={classes.signBtn}
              value='Sign Up'
              onClick={handleSign}
            />
            <div className={classes.signDes}>
              Already have an account?{" "}
              <span className={classes.importantLetter}>Sign in</span>
            </div>
            <div className={classes.signdivLine}>
              <div className={classes.signdivLineLetter}>or sign up with</div>
              <div className={classes.divLine}></div>
            </div>
            <div className={classes.serviceBtnRoot}>
              <ServiceButton
                className={classes.serviceBtn}
                type={SERVICEBUTTON.google}
                action={handleGoogle}
              />
              <ServiceButton
                className={classes.serviceBtn}
                type={SERVICEBUTTON.facebook}
                action={handleFacebook}
              />
              <ServiceButton
                className={classes.serviceBtn}
                type={SERVICEBUTTON.apple}
                action={handleApple}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
