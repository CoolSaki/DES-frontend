import clsx from "clsx";
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
}: ActionInputProps) {
  const classes = ActionInputStyles();
  console.log("test: ", error);

  return (
    <>
      <div className={classes.title}>{title} *</div>
      <input
        type={type}
        className={clsx(classes.root, className, error && classes.errorBorder)}
        value={value}
        placeholder={placeholder}
        onChange={(e) => action(e)}
      />
      {error ? <div className={classes.error}>{error}</div> : <></>}
    </>
  );
}
