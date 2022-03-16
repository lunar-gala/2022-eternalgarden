import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import cn from 'classnames';

import styles from 'routes/menu/index.module.scss';
import Button from 'components/button';
import { ReactComponent as LGLogo } from 'assets/icons/lg-logo.svg';

const transition = {
  duration: 1,
  ease: 'easeOut',
};

const button = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    delay: 0,
  },
};

const items = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.02,
      // ease: 'linear',
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.02,
      // ease: 'linear',
      staggerDirection: 1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const logo = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
      delay: 0.6,
    },
  },
};

export default function Menu() {
  const location = useLocation();

  return (
    <div>
      <section className={cn(styles.container)}>
        <div>
          <Link
            to={location.state?.previousLocation || '/'}
            state={{ previousLocation: '/menu' }}
          >
            <motion.div
              className={styles.wrapper}
              variants={button}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={transition}
            >
              <Button>CLOSE</Button>
            </motion.div>
          </Link>
          <motion.div
            className={styles.items}
            variants={items}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.h3
              className={cn(styles.item, styles.active)}
              variants={item}
            >
              <Link
                to="/"
                className={cn(styles.item)}
                state={{ previousLocation: '/menu' }}
              >
                HOME
              </Link>
            </motion.h3>
            <motion.h3
              className={cn(styles.item, styles.active)}
              variants={item}
            >
              <Link
                to="/about"
                state={{ previousLocation: '/menu' }}
                className={cn(styles.item)}
              >
                ABOUT
              </Link>
            </motion.h3>

            <motion.h3
              className={cn(styles.item, styles.active)}
              variants={item}
            >
              <Link
                to="/people"
                state={{ previousLocation: '/menu' }}
                className={cn(styles.item)}
              >
                PEOPLE
              </Link>
            </motion.h3>
            <motion.h3
              className={cn(styles.item, styles.active)}
              variants={item}
            >
              <Link
                to="/lines"
                state={{ previousLocation: '/menu' }}
                className={cn(styles.item)}
              >
                LINES
              </Link>
            </motion.h3>
            <motion.h3
              className={cn(styles.item, styles.active)}
              variants={item}
            >
              <a
                className={cn(styles.item)}
                href="https://carnegiemellontickets.universitytickets.com/w/event.aspx?id=2150&p=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                TICKETS
              </a>
            </motion.h3>
            <motion.h3
              className={cn(styles.item, styles.highlight)}
              variants={item}
            >
              <a
                className={cn(styles.item)}
                href="https://docs.google.com/forms/d/e/1FAIpQLSekz-SgRUPF2_M_5DGIfio-2hwVc7LnaUKAau1qBTZ1A7H6Pg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                FLOWER SALE
              </a>
            </motion.h3>
            <motion.h3 className={cn(styles.disabled)} variants={item}>
              MERCH
              <span className={cn('h5', styles.highlight)}>COMING SOON</span>
            </motion.h3>
          </motion.div>
        </div>
        <motion.div
          className={styles.wrapper}
          variants={logo}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <a
            className={styles.logo}
            href="https://lunargala.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LGLogo />
          </a>
        </motion.div>
      </section>
      <div className={cn('noise', styles.noiseLayer)} />
    </div>
  );
}
