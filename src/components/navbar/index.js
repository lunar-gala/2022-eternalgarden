import cn from 'classnames';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import Button from 'components/button';
import { Fragment } from 'react';

export default function NavBar({ prevLoc }) {
  return (
    <Fragment>
      <Link to="/menu" state={{ previousLocation: `/${prevLoc}` }}>
        <div
          className={styles.navLeft}
          // variants={button}
          // initial="hidden"
          // animate="visible"
          // exit="hidden"
          // transition={{ ...transition, delay: 0.1 }}
        >
          <Button type="white">Explore</Button>
        </div>
      </Link>
      <div
        className={styles.navRight}
        // variants={button}
        // initial="hidden"
        // animate="visible"
        // exit="hidden"
        // transition={{ ...transition, delay: 0.1 }}
      >
        <Button type="white">
          <a
            href="https://carnegiemellontickets.universitytickets.com/w/event.aspx?id=2150&p=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tickets
          </a>
        </Button>
      </div>
    </Fragment>
  );
}
