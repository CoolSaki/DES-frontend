import clsx from "clsx";
import { useStyles } from "./ActionSelectStyles";

interface ActionSelectProps {
  className?: any;
  items: any;
  select: (e: string) => void;
  placeholder?: string;
  title: string;
  error?: string;
}

export default function ActionSelect({
  title,
  className,
  items,
  select,
  placeholder,
  error,
}: ActionSelectProps) {
  const classes = useStyles();
  const handleSelect = (e: any) => {
    select(e);
  };

  return (
    <div className={clsx(classes.mainRoot, className)}>
      <div className={classes.title}>{title} *</div>
      <div className={classes.root}>
        <select
          className={clsx(classes.container, error && classes.errorBorder)}
          onClick={(e) => handleSelect(e)}
          placeholder={placeholder}>
          {items?.map((item: any, key: any) => {
            return (
              <option key={key} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <i className='fas fa-sort-down'></i>
      </div>
      {error ? <div className={classes.error}>{error}</div> : <></>}
    </div>
  );
}
