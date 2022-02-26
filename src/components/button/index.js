import cn from 'classnames';
import styles from './index.module.scss';

console.log(styles);

export default function Button({ className, type, onClick, children }) {
  return (
    <div className={cn(styles.btn, className, { [styles.btnWhite]: type === 'white' })} onClick={onClick}>
      {children}
    </div>
  );
}
