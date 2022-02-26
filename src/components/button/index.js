import cn from 'classnames';
import styles from './index.module.scss';

export default function Button({ className, onClick, children }) {
  return (
    <div className={cn(styles.btn, className)} onClick={onClick}>
      {children}
    </div>
  );
}
