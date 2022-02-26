import { AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import styles from 'routes/menu/index.module.scss';
import Button from 'components/button';
import { ReactComponent as LGLogo } from 'assets/icons/lg-logo.svg';

export default function Menu() {
  const location = useLocation();

  return (
    <div>
      <section className={cn(styles.container)}>
        <div>
          <Link to={location.state.previousLocation} state={{ previousLocation: '/menu' }}>
            <Button>
              CLOSE
            </Button>
          </Link>
          <div className={styles.items}>
            <Link to="/" state={{ previousLocation: '/menu' }} className={cn(styles.item)}>
              HOME
            </Link>
            <Link to="/about" state={{ previousLocation: '/menu' }} className={cn(styles.item)}>
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
