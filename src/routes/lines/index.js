import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

import './index.scss';
import Button from '../../components/button/index';
import Card from '../../components/card/card';
import { LINE_INFO } from 'assets/lines/line_data';
import {
  transition,
  button,
  container,
  leftFlowers,
  rightFlowers,
} from './animation';

import blueFlowerLeft from 'assets/lines_animation/blue_flower_left.svg';
import blueFlowerRight from 'assets/lines_animation/blue_flowers_right.svg';
import redFlowerSmall from 'assets/lines_animation/red_flower_small.svg';
import redFlowerBig from 'assets/lines_animation/red_flower_big.svg';

//lottie files
import Lottie from 'react-lottie';
import purple3flower from 'assets/lines_animation/purple3flower.json';
import maxBud from 'assets/lines_animation/maxbud.json';
import sunflower from 'assets/lines_animation/sunflower.json';
import dragonfly from 'assets/lines_animation/dragonfly.json';

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
      <Link to="/menu" state={{ previousLocation: '/lines' }}>
        <motion.div
          className="home-nav-left"
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
        className="home-nav-right"
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
        {/* <motion.div className="flowers">
          <motion.div
            className="flowers-left"
            initial="lineList"
            exit="lineList"
            animate={controls}
            variants={leftFlowers}
          >
            <motion.img className="flowers-left-blue" src={blueFlowerLeft} />
            <motion.img className="flowers-left-red__big" src={redFlowerBig} />
            <motion.img
              className="flowers-left-red__small"
              src={redFlowerSmall}
            />
          </motion.div>
          <motion.div
            className="flowers-right"
            initial="lineList"
            exit="lineList"
            animate={controls}
            variants={rightFlowers}
          >
            <motion.img className="flowers-right-blue" src={blueFlowerRight} />
            <motion.img className="flowers-right-dragonfly" src={dragonfly} />
          </motion.div>
        </motion.div> */}
        <div className="lines-gradient"></div>
        <div className="noise" />
      </div>

      <motion.div id="purple3flower" variants={flower}>
        <Lottie options={purple3flowerSettings} />
      </motion.div>
      <motion.div id="maxBud" variants={flower}>
        <Lottie options={maxBudSettings} />
      </motion.div>
      <motion.div id="sunflower" variants={flower}>
        <Lottie options={sunflowerSettings} />
      </motion.div>
      <motion.div id="dragonfly" variants={flower}>
        <Lottie options={dragonflySettings} />
      </motion.div>
    </motion.section>
  );
}
