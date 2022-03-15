import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import data from './people';

import styles from './index.module.scss';
import Button from 'components/button';
import Lottie from 'react-lottie';
import eyeFlower from 'assets/about_animation/eyeflower/eyeflower.json';
import orangeFlower from 'assets/about_animation/orangeflower/orangeflower.json';
import pinkFlower from 'assets/about_animation/pinkflower/pinkflower.json';
import groupPurpleFlower from 'assets/about_animation/group_purpleflower/group_purpleflower.json';
import singlePurpleFlower from 'assets/about_animation/single_purpleflower/single_purpleflower.json';

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

const singlePurpleFlowerSettings = {
  loop: true,
  autoplay: true,
  animationData: singlePurpleFlower,
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
      staggerChildren: 0.05,
      ease: 'easeOut',
      delay: 0.07,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
      delay: 0.07,
      ease: 'easeOut',
    },
  },
};

const flowerStagger = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.05,
      ease: 'easeOut',
      delay: 0.07,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
      delay: 0.07,
      ease: 'easeOut',
    },
  },
};

const flower = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
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

export default function People() {
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
          <motion.div
            className={styles.wrapper}
            variants={button}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ ...transition, delay: 0.1 }}
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
          </motion.div>
          {/* </Link> */}
        </div>
        <motion.div
          variants={items}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.h1 className={cn('h2', styles.header)} variants={item}>
            PEOPLE
          </motion.h1>
          {data.map((item) => {
            return (
              <div key={item.team}>
                <motion.h2
                  className={cn('h4', styles.subheader)}
                  variants={item}
                >
                  {item.team}
                </motion.h2>
                <div className={styles.content}>
                  {item.people.map((person) => {
                    return (
                      <div className={styles.card} key={person.slug}>
                        <img
                          src={`assets/people/${person.slug}.jpg`}
                          alt={person.name + ' photo'}
                        />
                        <p>{person.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          variants={flowerStagger}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ ...transition, delay: 0.1 }}
          className="flowers"
        >
          <motion.div className={styles.eyeFlower} variants={flower}>
            <Lottie options={eyeFlowerSettings} />
          </motion.div>
          <motion.div className={styles.orangeFlower} variants={flower}>
            <Lottie options={orangeFlowerSettings} />
          </motion.div>
          <motion.div className={styles.pinkFlower} variants={flower}>
            <Lottie options={pinkFlowerSettings} />
          </motion.div>
          <motion.div className={styles.singlePurpleFlower} variants={flower}>
            <Lottie options={singlePurpleFlowerSettings} />
          </motion.div>
          <motion.div className={styles.groupPurpleFlower} variants={flower}>
            <Lottie options={groupPurpleFlowerSettings} />
          </motion.div>
        </motion.div>
      </motion.section>
      <div className={cn('noise', styles.noise)} />
    </div>
  );
}
