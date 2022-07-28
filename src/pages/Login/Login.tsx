import { useStyles } from "./LoginStyle";
import authImg from "../../assets/images/auth_img.png";
import logo from "../../assets/icons/logo.png";
import ActionInput from "components/ActionInput/ActionInput";
import { useState } from "react";
import ErrorMsg from "components/ErrorMsg/ErrorMsg";
import ServiceButton from "components/ServiceButton/ServiceButton";
import { SERVICEBUTTON } from "config/constant";
import ActionArrowButton from "components/ActionArrowButton/ActionArrowButton";
import { useAppDispatch } from "store/hooks";
import { useNavigate } from "react-router-dom";
import { loginUser } from "store/auth";

export const Login = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate =  useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  //-----------------service button function ----------------------
  const handleGoogle = () => {};

  const handleFacebook = () => {};

  const handleApple = () => {};


  const handleRegister=()=>{
    navigate("/register")
  }
  //--------------------login fucntion -----------------------
  const handleSign = () => {
    const param ={
      email:  email,
      password: password,
    }
    dispatch(loginUser(param))
  };

  return (
    <div className={classes.root}>
      <div className={classes.contianer}>
        <div className={classes.mainRoot}>
          <img src={authImg} className={classes.mainImg} />
          <div className={classes.main}>
            <img src={logo} className={classes.logo} />
            <div className={classes.title}>Sign In</div>
            <div className={classes.md15}>
              <ActionInput
                title='Email Address'
                action={(e) => handleEmail(e)}
                placeholder='Email'
                value={email}
                inputType="signIn"
              />
              <ErrorMsg
                show={true}
                value='Please enter a valid email address.'
                className={classes.mt12}
              />
            </div>
            <div className={classes.md15}>
              <ActionInput
                type='password'
                title='Password'
                className={classes.mr10}
                action={(e) => handlePassword(e)}
                placeholder='Password'
                value={password}
                inputType="signIn"
              />
              <ErrorMsg
                show={true}
                value='Please enter a valid password.'
                className={classes.mt12}
              />
            </div>
            <div className={classes.forgotRoot}>
              <div className={classes.checkRoot}>
                <input type='checkbox' className={classes.checkbox} />
                Remember me
              </div>
              <span className={classes.forgotPass}>Forgot Password?</span>
            </div>
            <ActionArrowButton
              className={classes.signBtn}
              value='Sign In'
              onClick={handleSign}
            />
            <div className={classes.signDes}>
              Don’t have an account?
              <span className={classes.importantLetter} onClick={handleRegister}>Sign up</span>
            </div>
            <div className={classes.signdivLine}>
              <div className={classes.signdivLineLetter}>or continue with</div>
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
