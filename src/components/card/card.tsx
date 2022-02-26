import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import './card.scss';
import { motion, AnimatePresence } from 'framer-motion';
import internal from 'stream';

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
    <>
      {open ? (
        <AnimatePresence>
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
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {name}
              </motion.h1>
              <motion.div className="card-content">
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
        </AnimatePresence>
      ) : (
        <motion.li
          onClick={() => setOpen(true)}
          layoutId={`line-item-${index}`}
          className="lines-item"
        >
          <p>{name}</p>
        </motion.li>
      )}
    </>
  );
}
