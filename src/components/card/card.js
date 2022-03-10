import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import './card.scss';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const items = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.02,
      staggerDirection: 1,
    },
  },
};

const item = {
  lineList: {
    opacity: 1,
  },
  lineOpen: {
    opacity: 0,
  },
};

export default function Card({
  className = '',
  name = '',
  designers = [],
  description = '',
  images = [],
  index,
  controls,
}) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(false);

  const openCard = () => {
    setOpen(true);
    controls.start('lineOpen');
    setContent(true);
  };

  const closeCard = () => {
    setContent(false);
    setTimeout(() => {
      setOpen(false);
      controls.start('lineList');
    }, 500);
  };

  let classes = classNames({
    card: true,
    [className]: true,
  });
  return (
    <AnimateSharedLayout>
      {open && (
        <motion.div onClick={closeCard} className={classes}>
          <motion.div className="card-main">
            <motion.p
              layout="position"
              layoutId={`line-item-${index}`}
              className="card-heading h1"
            >
              {name}
            </motion.p>
            <AnimatePresence>
              {content && (
                <motion.div
                  className="card-content"
                  variants={items}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <motion.h4 className="card-designers">
                    {designers.join(', ')}
                  </motion.h4>
                  <motion.p
                    className="card-description"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></motion.p>
                  <motion.div className="card-images">
                    {images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${name} line shoot number ${index}`}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
      <li onClick={openCard} className="lines-item">
        <motion.p
          initial="lineList"
          exit="lineList"
          animate={controls}
          variants={item}
          layout="position"
          layoutId={`line-item-${index}`}
          className="h1"
        >
          {name}
        </motion.p>
      </li>
    </AnimateSharedLayout>
  );
}
