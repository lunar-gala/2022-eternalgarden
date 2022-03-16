import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Lottie from 'react-lottie';

import './index.scss';
import Card from '../../components/card/card';
import { LINE_INFO } from 'assets/lines/line_data';
import NavBar from 'components/navbar';
import useWindowSize from 'hooks/useWindowSize';
import BottomGradient from 'components/bottomGradient';
import {
  transition,
  container,
  getFlowerVariants,
  flowerStagger,
} from './animation';
import {
  flower,
  purple3flowerSettings,
  dragonflySettings,
  maxBudSettings,
  sunflowerSettings,
  pointyflowerSettings,
} from './lottie_settings';

export default function Lines() {
  const controls = useAnimation();
  const size = useWindowSize();
  const isMobile = size?.width < 768;

  const { leftFlowers, rightFlowers } = getFlowerVariants(isMobile ? 25 : 65);

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
