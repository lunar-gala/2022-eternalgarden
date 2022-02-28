import { AnimatePresence } from 'framer-motion';
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
    scale: 1,
    opacity: 0,
    delay: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    delay: 0,
  },
};

const items = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.05,
      ease: 'easeOut',
      delay: 0.0,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
      delay: 0.0,
      ease: 'easeOut',
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
      duration: 1,
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
              transition={{ ...transition, delay: 0 }}
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
            <motion.h3 className={cn(styles.item)} variants={item}>
              <Link
                to="/"
                className={cn(styles.item)}
                state={{ previousLocation: '/menu' }}
              >
                HOME
              </Link>
            </motion.h3>
            <motion.h3 className={styles.item} variants={item}>
              <Link
                to="/about"
                state={{ previousLocation: '/menu' }}
                className={cn(styles.item)}
              >
                ABOUT
              </Link>
            </motion.h3>
            <motion.h3
              className={cn(styles.item, styles.disabled)}
              variants={item}
            >
              LINES
              <span className={cn('h5', styles.highlight)}>COMING 3/15</span>
            </motion.h3>
            <motion.h3
              className={cn(styles.item, styles.disabled)}
              variants={item}
            >
              PEOPLE
              <span className={cn('h5', styles.highlight)}>COMING 3/18</span>
            </motion.h3>
            <motion.h3
              className={cn(styles.item, styles.highlight)}
              variants={item}
            >
              <a
                href="https://carnegiemellontickets.universitytickets.com/w/event.aspx?id=2150&p=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                TICKETS
              </a>
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
