import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from 'routes/menu/index.module.scss';
import Button from 'components/button';
import { ReactComponent as LGLogo } from 'assets/icons/lg-logo.svg';

export default function Menu() {
  const handleMenu = () => console.log('TODO');

  return (
    <div>
      <section className={cn(styles.container)}>
        <div>
          <Button onClick={handleMenu}>CLOSE</Button>
          <div className={styles.items}>
            <Link to="/" className={cn(styles.item)}>
              HOME
            </Link>
            <Link to="/about" className={cn(styles.item)}>
              ABOUT
            </Link>
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
      <div className={cn('noise', styles.noiseLayer)} />
    </div>
  )
}
