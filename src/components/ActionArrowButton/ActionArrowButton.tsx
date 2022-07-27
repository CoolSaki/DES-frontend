import clsx from "clsx";
import { useStyles } from "./ActionArrowButtonStyles";
import RightArrow from "../../assets/icons/right-arrow.png";

interface ActionArrowButtonProps {
  className?: any;
  onClick?: () => void;
  type?: string;
  value: string;
}

export default function ActionArrowButton({
  className,
  onClick,
  type,
  value,
}: ActionArrowButtonProps) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} onClick={onClick}>
      <span className={classes.btnValue}>{value}</span>
      <img src={RightArrow} className={classes.icon} />
    </div>
  );
}
