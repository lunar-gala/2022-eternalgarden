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
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const items = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.3,
      ease: 'easeOut',
      delay: 1.2,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      delay: 0.2,
      ease: 'easeOut',
    },
  },
};

const item = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
}

const logo = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function Menu() {
  const location = useLocation();

  return (
    <div>
      <section className={cn(styles.container)}>
        <div>
          <Link to={location.state.previousLocation} state={{ previousLocation: '/menu' }}>
            <motion.div
              className={styles.wrapper}
              variants={button}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ ...transition, delay: 0 }}
            >
              <Button>
                CLOSE
              </Button>
            </motion.div>
          </Link>
          <motion.div
            className={styles.items}
            variants={items}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className={styles.item} variants={item}>
              <Link to="/" state={{ previousLocation: '/menu' }} className={cn(styles.item)}>
                HOME
              </Link>
            </motion.div>
            <motion.div className={styles.item} variants={item}>
              <Link to="/about" state={{ previousLocation: '/menu' }} className={cn(styles.item)}>
                ABOUT
              </Link>
            </motion.div>
            <motion.div className={cn(styles.item, styles.disabled)} variants={item}>
              LINES
              <span className={cn(styles.callout, styles.highlight)}>
                COMING 3/15
              </span>
            </motion.div>
            <motion.div className={cn(styles.item, styles.disabled)} variants={item}>
              PEOPLE
              <span className={cn(styles.callout, styles.highlight)}>
                COMING 3/18
              </span>
            </motion.div>
            <motion.div className={cn(styles.item, styles.highlight)} variants={item}>
              TICKETS
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className={styles.wrapper}
          variants={logo}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ ...transition, duration: 0.3, delay: 1.9 }}
        >
          <LGLogo />
        </motion.div>
      </section>
      <div className={cn('noise', styles.noiseLayer)} />
    </div>
  )
}
