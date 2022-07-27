/** @format */

import { useState } from "react";
import { useStyles } from "./RegisterStyle";
import authImg from "../../assets/images/auth_img.png";
import logo from "../../assets/icons/logo.png";
import ActionInput from "components/ActionInput/ActionInput";
import ActionSelect from "components/ActionSelect/ActionSelect";
import ActionArrowButton from "components/ActionArrowButton/ActionArrowButton";
import ErrorMsg from "components/ErrorMsg/ErrorMsg";
import ServiceButton from "components/ServiceButton/ServiceButton";
import { emailRegex, passwordRegax, SERVICEBUTTON } from "config/constant";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { registerUser } from "store/auth";
import { useNavigate } from "react-router-dom";
import { errMsg, errPart } from "store/auth/selectors";

export const Register = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [select, setSelect] = useState<any>();
  const [policy, setPolicy] = useState(false);

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPolicy, setErrorPolicy] = useState("");
  const [errorselect, setErrorSelect] = useState<any>();

  const handleFirstName = (e: any) => {
    setErrorName("");
    setFirstName(e.target.value);
  };

  const handleLastName = (e: any) => {
    setErrorName("");
    setLastName(e.target.value);
  };

  const handleEmail = (e: any) => {
    setErrorEmail("");
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setErrorPassword("");
    setPassword(e.target.value);
  };

  const handleConPassword = (e: any) => {
    setErrorPassword("");
    setConPassword(e.target.value);
  };

  const handleSelect = (e: any) => {
    setErrorSelect("");
    setSelect(e.target.value);
  };

  const handleChange = () => {
    setPolicy(!policy);
    setErrorPolicy("");
  };

  //-----------------service button function ----------------------
  const handleGoogle = () => {};

  const handleFacebook = () => {};

  const handleApple = () => {};

  const handleLogin = () => {
    navigate("/");
  };
  //-----------------register function-----------------
  const handleSign = async () => {
    if (!policy) {
      setErrorPolicy("You have to read our policy!");
      return;
    }
    if (lastName === "" || firstName === "") {
      setErrorName("Please fill out input field.");
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorEmail("Please enter a valid email address.");
      return;
    }
    if (!passwordRegax.test(email)) {
      setErrorPassword(
        `Passwords must be 6-8 chracters long and must contain a number, an uppercase & lowercase letter.`
      );
      return;
    }
    if (select === "") {
      setErrorSelect("Please select exactly.");
      return;
    }
    if (password !== conPassword) {
      setErrorPassword("Password did not match.");
      return;
    }
    const param = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: conPassword,
      visaType: select,
    };
    await dispatch(registerUser(param));
  };
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
                show={errorName !== ""}
                value={errorName}
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
                show={errorEmail !== ""}
                value={errorEmail}
                className={classes.mt12}
              />
            </div>
            <div className={classes.md15}>
              <ActionSelect
                title='Visa Type'
                error={errorselect}
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
                show={errorPassword !== ""}
                value={errorPassword}
                className={classes.mt12}
              />
            </div>
            <div className={classes.checkRoot}>
              <input
                type='checkbox'
                checked={policy}
                className={classes.checkbox}
                onChange={handleChange}
              />
              I agree to the Terms & Conditions
            </div>
            <ErrorMsg
              show={errorPolicy !== ""}
              value={errorPolicy}
              className={classes.mt12}
            />
            <ActionArrowButton
              className={classes.signBtn}
              value='Sign Up'
              onClick={handleSign}
            />
            <div className={classes.signDes}>
              Already have an account?{" "}
              <span className={classes.importantLetter} onClick={handleLogin}>
                Sign in
              </span>
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
