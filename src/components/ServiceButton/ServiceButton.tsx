import clsx from "clsx";
import { useStyles } from "./ServiceButtonStyles";
import Google from "../../assets/icons/google.png";
import Apple from "../../assets/icons/apple.png";
import Facebook from "../../assets/icons/facebook.png";
import { SERVICEBUTTON } from "config/constant";

interface ServiceButtonProps {
  type: string;
  className?: any;
  action: () => void;
}

export default function ServiceButton({
  className,
  type,
  action,
}: ServiceButtonProps) {
  const classes = useStyles();

  return (
    <>
      <div className={clsx(className, classes.root)} onClick={action}>
        <img
          src={
            type === SERVICEBUTTON.google
              ? Google
              : type === SERVICEBUTTON.facebook
              ? Facebook
              : Apple
          }
          className={classes.icon}
          alt='service'
        />
        <span className={classes.name}>{type}</span>
      </div>
    </>
  );
}
