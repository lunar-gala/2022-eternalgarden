import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import './index.scss';
import Button from '../../components/button/index';
import Card from '../../components/card/card';
import { LINE_INFO } from '../../assets/data/line_data';

export default function Lines() {
  const controls = useAnimation();

  return (
    <>
      <motion.div className="lines">
        <motion.div
          className="lines-nav-left"
          initial="loading"
          animate={controls}
        >
          <Button onClick={() => console.log('Explore')} className="btn__white">
            Explore
          </Button>
        </motion.div>
        <motion.div
          className="lines-nav-right"
          initial="loading"
          animate={controls}
        >
          <Button
            onClick={() => console.log('Link to tickets')}
            className="btn__white"
          >
            Tickets
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
      </motion.div>
    </>
  );
}
