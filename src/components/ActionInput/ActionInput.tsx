import clsx from "clsx";
import { useState } from "react";
import { ActionInputStyles } from "./ActionInputStyles";

interface ActionInputProps {
  className?: any;
  placeholder?: string;
  value: string;
  action: (e: any) => void;
  disable?: boolean;
  type?: string;
  title: string;
  error?: string;
  inLine?: React.ReactNode;

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
  inLine,
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
    <>
      <div className={classes.title}>{title} *</div>
      <div className={classes.container}>
        <input
          type={type === "password" && showStatus ? "password" : "text"}
          className={clsx(
            classes.root,
            className,
            error && classes.errorBorder
          )}
          value={value}
          placeholder={placeholder}
          onChange={(e) => action(e)}
        />
        {inLine}
        {type !== "password" ? (
          <></>
        ) : showStatus ? (
          <i className='far fa-eye' onClick={handleHide}></i>
        ) : (
          <i className='far fa-eye-slash' onClick={handleShow}></i>
        )}

      </div>
      {error ? <div className={classes.error}>{error}</div> : <></>}
    </>
  );
}
