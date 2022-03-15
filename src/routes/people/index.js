import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import data from './people.json';
import NavBar from 'components/navbar';

import styles from './index.module.scss';
import Button from 'components/button';
import Lottie from 'react-lottie';
import PageTitle from 'components/pageTitle';
import PeopleCard from 'components/peopleCard';
import BottomGradient from 'components/bottomGradient';

import rose from 'assets/people_animation/rosegroup/rosegroup.json';
import roseSingle from 'assets/people_animation/rosesingle/rosesingle.json';
import roundFlower from 'assets/people_animation/roundflower/roundflower.json';
import sunflower from 'assets/people_animation/sunflower/sunflower.json';
import groupPurpleFlower from 'assets/about_animation/group_purpleflower/group_purpleflower.json';

//lottieAnimation settings
const groupPurpleFlowerSettings = {
  loop: true,
  autoplay: true,
  animationData: groupPurpleFlower,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const roseSettings = {
  loop: true,
  autoplay: true,
  animationData: rose,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const roseSingleSettings = {
  loop: true,
  autoplay: true,
  animationData: roseSingle,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const roundFlowerSettings = {
  loop: true,
  autoplay: true,
  animationData: roundFlower,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const sunflowerSettings = {
  loop: true,
  autoplay: true,
  animationData: sunflower,
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
        <NavBar prevLoc="people"></NavBar>

        <motion.div
          variants={items}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <PageTitle title="People"></PageTitle>
          {data.map((item) => {
            return (
              <div key={item.team}>
                {!item.subteam && (
                  <motion.h2
                    className={cn('h3', styles.subheader)}
                    variants={item}
                  >
                    {item.team}
                  </motion.h2>
                )}

                {/* TODO: pls change this styling */}
                {item.subteam && (
                  <motion.h4
                    className={cn('h4', styles.subheader)}
                    variants={item}
                  >
                    {item.subteam}
                  </motion.h4>
                )}

                <div className={styles.content}>
                  {item.people.map((person) => {
                    return (
                      <PeopleCard
                        name={person.name}
                        slug={person.slug}
                      ></PeopleCard>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.section>

      <BottomGradient></BottomGradient>
      <motion.div
        variants={flowerStagger}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ ...transition, delay: 0.1 }}
        className={styles.flowers}
      >
        <motion.div className={styles.rose} variants={flower}>
          <Lottie options={roseSettings} />
        </motion.div>
        <motion.div className={styles.roseSingle} variants={flower}>
          <Lottie options={roseSingleSettings} />
        </motion.div>
        <motion.div className={styles.roundFlower} variants={flower}>
          <Lottie options={roundFlowerSettings} />
        </motion.div>
        <motion.div className={styles.sunflower} variants={flower}>
          <Lottie options={sunflowerSettings} />
        </motion.div>
        <motion.div className={styles.groupPurpleFlower} variants={flower}>
          <Lottie options={groupPurpleFlowerSettings} />
        </motion.div>
      </motion.div>
      <div className={cn('noise', styles.noise)} />
    </div>
  );
}
