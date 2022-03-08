import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import './card.scss';
import { motion, AnimateSharedLayout } from 'framer-motion';

interface Props {
  className?: string;
  name?: string;
  designers?: Array<string>;
  description?: string;
  images?: Array<string>;
  index: number;
}

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
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function Card({
  className = '',
  name = '',
  designers = [],
  description = '',
  images = [],
  index,
}: Props) {
  const [open, setOpen] = useState(false);

  let classes = classNames({
    card: true,
    [className]: true,
  });

  return (
    <AnimateSharedLayout>
      {open && (
        <motion.div onClick={() => setOpen(false)} className={classes}>
          <motion.div className="card-main">
            <motion.p
              onClick={() => setOpen(false)}
              layout="position"
              layoutId={`line-item-${index}`}
              className="card-heading"
            >
              {name}
            </motion.p>
            <motion.div
              className="card-content"
              variants={items}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.h2 variants={item} className="card-designers">
                {designers.join(', ')}
              </motion.h2>
              <motion.p variants={item} className="card-description">
                {description}
              </motion.p>
              <motion.div variants={item} className="card-images">
                {images.map((img, index) => (
                  <img
                    src={img}
                    alt={`${name} line shoot number ${index + 1}`}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      <li onClick={() => setOpen(true)} className="lines-item">
        <motion.p layout="position" layoutId={`line-item-${index}`}>
          {name}
        </motion.p>
      </li>
    </AnimateSharedLayout>
  );
}
