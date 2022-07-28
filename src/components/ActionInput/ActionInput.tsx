import clsx from "clsx";
import { useState } from "react";
import { ActionInputStyles } from "./ActionInputStyles";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

interface ActionInputProps {
  className?: any;
  placeholder?: string;
  value: string;
  action: (e: any) => void;
  disable?: boolean;
  type?: string;
  title: string;
  error?: boolean;
  inputType?:string;
}

export default function ActionInput({
  className,
  placeholder,
  value,
  action,
  disable,
  type,
  title,
  error,
  inputType
}: ActionInputProps) {
  const classes = ActionInputStyles();
  const [showStatus, setShowStatus] = useState(true);

  const handleShow = () => {
    setShowStatus(true);
  };

  const handleHide = () => {
    setShowStatus(false);
  };

  return (
    <div className={clsx(classes.mainRoot, className)}>
      <div className={classes.title}>{title} *</div>
      <div className={classes.container}>
      
      {inputType !== "signIn"? (
          <></>
        ) :  type!=="password" ? (
          <div className={classes.iconDiv}><MailOutlineIcon className={clsx(
            classes.signInIcon,
          )}></MailOutlineIcon></div>
        ) : (
          <div className={classes.iconDiv}><LockOpenIcon className={clsx(
            classes.signInIcon,
          )}></LockOpenIcon></div>
        )}
        <input
          type={type === "password" && showStatus ? "password" : "text"}
          className={clsx(
            classes.root,
            error && classes.errorBorder
          )}
          value={value}
          placeholder={placeholder}
          onChange={(e) => action(e)}
        />
        {type !== "password" ? (
          <></>
        ) : showStatus ? (
          <RemoveRedEyeOutlinedIcon className={classes.showStateIcon} onClick={handleHide}/>
        ) : (
          <VisibilityOffOutlinedIcon className={classes.showStateIcon} onClick={handleShow}/>
        )}

      </div>
    </div>
  );
}
