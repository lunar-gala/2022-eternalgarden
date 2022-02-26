import React from 'react';
import {
  motion,
  useAnimation,
  // AnimateSharedLayout,
  // AnimatePresence,
} from 'framer-motion';

import './lines.scss';
import Button from '../../components/button/button';
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
            {LINE_INFO.map(({ name }, index) => {
              return (
                <motion.li layoutId={`line-item-${index}`}>{name}</motion.li>
              );
            })}
          </ul>
          <div className="noise" />
        </motion.div>
      </motion.div>
    </>
  );
}
