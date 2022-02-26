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

export default function Button({
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className={classes}
        >
          <motion.div className="card-main">
            <motion.h1
              layoutId={`line-item-${index}`}
              className="card-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {name}
            </motion.h1>
            <motion.div
              className="card-content"
              transition={{ delay: 0.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="card-designers">{designers.join(', ')}</h2>
              <p className="card-description">{description}</p>
              <div className="card-images">
                {images.map((img, index) => (
                  <img
                    src={img}
                    alt={`${name} line shoot number ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      <li onClick={() => setOpen(true)} className="lines-item">
        <motion.p layoutId={`line-item-${index}`}>{name}</motion.p>
      </li>
    </AnimateSharedLayout>
  );
}
