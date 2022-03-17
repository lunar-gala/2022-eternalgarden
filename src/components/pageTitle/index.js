import cn from 'classnames';
import styles from './index.module.scss';

export default function PageTitle({ title }) {
  return <h1 className={cn('h2', styles.header)}>{title}</h1>;
}
