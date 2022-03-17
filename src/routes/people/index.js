import cn from 'classnames';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';

import data from './people.json';
import NavBar from 'components/navbar';
import styles from './index.module.scss';
import PageTitle from 'components/pageTitle';
import PeopleCard from 'components/peopleCard';
import BottomGradient from 'components/bottomGradient';

import {
  groupPurpleFlowerSettings,
  roseSettings,
  roseSingleSettings,
  roundFlowerSettings,
  sunflowerSettings,
} from './lottie_settings';

import {
  transition,
  container,
  items,
  flowerStagger,
  flower,
} from './animation';

export default function People() {
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
          style={{ paddingBottom: '200px' }}
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
      </motion.section>
      <div className={cn('noise', styles.noise)} />
    </div>
  );
}
