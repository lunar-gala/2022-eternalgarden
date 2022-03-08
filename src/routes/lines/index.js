import React, { useEffect, useState } from 'react';
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
import dragonfly from 'assets/lines_animation/dragonfly.svg';
import redFlowerSmall from 'assets/lines_animation/red_flower_small.svg';
import redFlowerBig from 'assets/lines_animation/red_flower_big.svg';

export default function Lines() {
  const controls = useAnimation();
  const [cardOpen, setCardOpen] = useState(false);

  useEffect(() => {
    if (cardOpen) {
      controls.start('shifted');
    } else {
      controls.start('positioned');
    }
  }, [controls, cardOpen]);

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
      <motion.div className="lines-main" initial="loading" animate={controls}>
        {/* noise on top of flowers + logo, so it is last */}
        <ul className="lines-list">
          {LINE_INFO.map((line, index) => {
            return <Card index={index} {...line} setCardOpen={setCardOpen} />;
          })}
        </ul>
        <motion.div className="flowers">
          <motion.div
            className="flowers-left"
            initial="positioned"
            exit="positioned"
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
            initial="positioned"
            exit="positioned"
            animate={controls}
            variants={rightFlowers}
          >
            <motion.img className="flowers-right-blue" src={blueFlowerRight} />
            <motion.img className="flowers-right-dragonfly" src={dragonfly} />
          </motion.div>
        </motion.div>
        <div className="lines-gradient"></div>
        <div className="noise" />
      </motion.div>
    </motion.section>
  );
}
