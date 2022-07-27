import clsx from "clsx";
import { useStyles } from "./ServiceButtonStyles";
import Google from "../../assets/icons/google.png";
import Apple from "../../assets/icons/apple.png";
import Facebook from "../../assets/icons/facebook.png";

interface ServiceButtonProps {
  type: string;
  className?: any;
}

export default function ServiceButton({ className, type }: ServiceButtonProps) {
  const classes = useStyles();

  return (
    <>
      {type === "google" && (
        <div className={clsx(className, classes.root)}>
          <img src={Google} className={classes.icon} alt='service' />
          <span className={classes.name}>Google</span>
        </div>
      )}
      {type === "facebook" && (
        <div className={clsx(className, classes.root)}>
          <img src={Facebook} className={classes.icon} alt='service' />
          <span className={classes.name}>Google</span>
        </div>
      )}
      {type === "apple" && (
        <div className={clsx(className, classes.root)}>
          <img src={Apple} className={classes.icon} alt='service' />
          <span className={classes.name}>Google</span>
        </div>
      )}
    </>
  );
}
