import clsx from "clsx";
import { useStyles } from "./ErrorMsgStyles";

interface ErrorMsgProps {
  show: boolean;
  className?: any;
  value: string;
}

export default function ErrorMsg({
  className,
  value,
  show,
}: ErrorMsgProps) {
  const classes = useStyles();

  return (
    <>
      {show ? (
        <div className={clsx(classes.root, className)}>{value}</div>
      ) : (
        <></>
      )}
    </>
  );
}
