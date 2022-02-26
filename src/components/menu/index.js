import { useEffect } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import Button from '../button';
import { ReactComponent as LGLogo } from '../../assets/icons/lg-logo.svg';

export default function Menu({ active, setActive }) {
  useEffect(() => {
    // TODO
  }, [active]);

  const handleMenu = () => setActive((s) => !s);

  return (
    <div>
      <section className={cn(styles.container, { [styles.active]: active })}>
        <div>
          <Button onClick={handleMenu}>CLOSE</Button>
          <div className={styles.items}>
            <div className={cn(styles.item, styles.active)}>
              HOME
            </div>
            <div className={cn(styles.item, styles.active)}>
              ABOUT
            </div>
            <div className={cn(styles.item, styles.disabled)}>
              LINES
              <span className={cn(styles.callout, styles.highlight)}>
                COMING 3/15
              </span>
            </div>
            <div className={cn(styles.item, styles.disabled)}>
              PEOPLE
              <span className={cn(styles.callout, styles.highlight)}>
                COMING 3/18
              </span>
            </div>
            <div className={cn(styles.item, styles.highlight)}>
              TICKETS
            </div>
          </div>
        </div>
        <div>
          <LGLogo />
        </div>
      </section>
      <div className={cn({ noise: active, [styles.noiseLayer]: active })} />
    </div>
  )
}
