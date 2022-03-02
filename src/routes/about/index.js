import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from 'routes/about/index.module.scss';
import Button from 'components/button';
import Lottie from 'react-lottie';
import eyeFlower from 'assets/about_animation/eyeflower/eyeflower.json';
import orangeFlower from 'assets/about_animation/orangeflower/orangeflower.json';
import pinkFlower from 'assets/about_animation/pinkflower/pinkflower.json';
import groupPurpleFlower from 'assets/about_animation/group_purpleflower/group_purpleflower.json';

//lottieAnimation settings
const eyeFlowerSettings = {
  loop: true,
  autoplay: true,
  animationData: eyeFlower,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const orangeFlowerSettings = {
  loop: true,
  autoplay: true,
  animationData: orangeFlower,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const pinkFlowerSettings = {
  loop: true,
  autoplay: true,
  animationData: pinkFlower,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const groupPurpleFlowerSettings = {
  loop: true,
  autoplay: true,
  animationData: groupPurpleFlower,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const transition = {
  duration: 1,
  ease: 'easeOut',
};

const button = {
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const container = {
  hidden: {
    opacity: 0,
    duration: 0.1,
  },
  visible: {
    opacity: 1,
    duration: 0.1,
  },
};

const items = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.02,
      ease: 'easeOut',
      delay: 0.07,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.02,
      delay: 0.07,
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

export default function About() {
  const location = useLocation();

  return (
    <div>
      <motion.section
        className={styles.container}
        variants={container}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ ...transition, delay: 0, duration: 0.3 }}
      >
        <div className={styles.navbar}>
          <Link to="/menu" state={{ previousLocation: '/about' }}>
            <motion.div
              className={styles.wrapper}
              variants={button}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ ...transition, delay: 0.1 }}
            >
              <Button type="white">Explore</Button>
            </motion.div>
          </Link>
          <Link to="/" state={{ previousLocation: '/about' }}>
            <motion.div
              className={styles.wrapper}
              variants={button}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ ...transition, delay: 0.1 }}
            >
              <Button type="white">Tickets</Button>
            </motion.div>
          </Link>
        </div>
        <motion.div
          className={styles.items}
          variants={items}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.h1 className={cn('h2', styles.header)} variants={item}>
            ABOUT
          </motion.h1>
          <motion.h2 className={cn('h4', styles.subheader)} variants={item}>
            EXISTENCE IS INTERDEPENDENT.
          </motion.h2>
          <div className={styles.content}>
            <motion.p className="body" variants={item}>
              Born in 1996, Lunar Gala is an annual student-run fashion show
              that showcases brilliant artistry in design, modeling, and
              production, and dance performance. The show was originally
              inspired by the Taiwanese Student Association’s Lunar New Year
              tradition of wearing new clothes. Over the years, it has evolved
              to become the largest fashion event in Pittsburgh, a unique
              platform to display innovative and avant.
            </motion.p>
            <motion.p className="body" variants={item}>
              Our designers are unafraid of freely expressing themselves and
              taking risks. They explore our society’s most pressing current
              events and cultural values to bring them to life. Some of the
              unconventional materials that they use range from technological
              mood-sensing chips or glow-in-the-dark resin to robust sheet
              metal.
            </motion.p>
          </div>
        </motion.div>
        <div className={styles.eyeFlower}>
          <Lottie options={eyeFlowerSettings} />
        </div>
        <div className={styles.orangeFlower}>
          <Lottie options={orangeFlowerSettings} />
        </div>
        <div className={styles.pinkFlower}>
          <Lottie options={pinkFlowerSettings} />
        </div>
        <div className={styles.groupPurpleFlower}>
          <Lottie options={groupPurpleFlowerSettings} />
        </div>
      </motion.section>
      <div className={cn('noise', styles.noise)} />
    </div>
  );
}
