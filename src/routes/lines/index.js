import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

import './index.scss';
import Button from '../../components/button/index';
import Card from '../../components/card/card';
import { LINE_INFO } from 'assets/lines/line_data';
import { transition, button, container } from './animation';

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
      <Link to="/menu" state={{ previousLocation: '/' }}>
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
            return <Card index={index} {...line} />;
          })}
        </ul>
        <div className="lines-gradient"></div>
        <div className="noise" />
      </motion.div>
    </motion.section>
  );
}
