import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

import './index.scss';
import Button from '../../components/button/index';
import Card from '../../components/card/card';
import { LINE_INFO } from 'assets/lines/line_data';
import NavBar from 'components/navbar';

import BottomGradient from 'components/bottomGradient';
import {
  transition,
  button,
  container,
  leftFlowers,
  rightFlowers,
} from './animation';

//lottie files
import Lottie from 'react-lottie';
import purple3flower from 'assets/lines_animation/purple3flower.json';
import maxBud from 'assets/lines_animation/maxbud.json';
import sunflower from 'assets/lines_animation/sunflower.json';
import dragonfly from 'assets/lines_animation/dragonfly.json';
import pointyflower from 'assets/lines_animation/pointyflower.json';

const flower = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const purple3flowerSettings = {
  loop: true,
  autoplay: true,
  animationData: purple3flower,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const dragonflySettings = {
  loop: true,
  autoplay: true,
  animationData: dragonfly,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const maxBudSettings = {
  loop: true,
  autoplay: true,
  animationData: maxBud,
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

const pointyflowerSettings = {
  loop: true,
  autoplay: true,
  animationData: pointyflower,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
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

export default function Lines() {
  const controls = useAnimation();

  return (
    <motion.section
      className="lines"
      variants={container}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ ...transition, delay: 0, duration: 0.3 }}
    >
      <div className="lines-main">
        {/* noise on top of flowers + logo, so it is last */}
        <ul className="lines-list">
          {LINE_INFO.map((line, index) => {
            return (
              <Card
                key={line.id || index}
                index={line.id || index}
                {...line}
                controls={controls}
              />
            );
          })}
        </ul>
        <motion.div className="flowers">
          <motion.div
            className="flowers-left"
            initial="lineList"
            exit="lineList"
            animate={controls}
            variants={leftFlowers}
          >
            <motion.div className="flowers-left-blue" variants={flower}>
              <Lottie options={sunflowerSettings} />
            </motion.div>
            <motion.div className="flowers-left-red__big" variants={flower}>
              <Lottie options={pointyflowerSettings} />
            </motion.div>
            <motion.div className="flowers-left-red__small" variants={flower}>
              <Lottie options={maxBudSettings} />
            </motion.div>
          </motion.div>
          <motion.div
            className="flowers-right"
            initial="lineList"
            exit="lineList"
            animate={controls}
            variants={rightFlowers}
          >
            <motion.div className="flowers-right-blue" variants={flower}>
              <Lottie options={purple3flowerSettings} />
            </motion.div>
            <motion.div className="flowers-right-dragonfly" variants={flower}>
              <Lottie options={dragonflySettings} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <BottomGradient></BottomGradient>
      <div className="noise" />
      <NavBar prevLoc="lines"></NavBar>
    </motion.section>
  );
}
