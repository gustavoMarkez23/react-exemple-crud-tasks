import { ReactNode } from "react";
import styles from './Button.module.scss';

interface Props {
  onClick: () => void,
  children: ReactNode,
}

function Button({onClick, children}: Props) {
  return (
    <button onClick={onClick} className={styles.button}>{children}</button>
  );
}

export default Button;