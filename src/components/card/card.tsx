import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import './card.scss';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const transition = {
  duration: 0.5,
  delay: 0.5,
  ease: 'easeOut',
};
interface Props {
  className?: string;
  name?: string;
  designers?: Array<string>;
  description?: string;
  images?: Array<string>;
  index: number;
}

export default function Card({
  className = '',
  name = '',
  designers = [],
  description = '',
  images = [],
  index,
}: Props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(false);

  const openCard = () => {
    setTitle(true);
    setOpen(true);
  };

  let classes = classNames({
    card: true,
    [className]: true,
  });

  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        {title && (
          <motion.p
            onClick={() => setOpen(false)}
            layout="position"
            layoutId={`line-item-${index}`}
            className="card-heading"
            transition={{ duration: 0.5 }}
          >
            {name}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence onExitComplete={() => setTitle(false)}>
        {open && (
          <motion.div onClick={() => setOpen(false)} className={classes}>
            <motion.div className="card-main">
              <motion.div
                className="card-content"
                transition={transition}
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
      </AnimatePresence>
      <li onClick={openCard} className="lines-item" key={name}>
        <motion.p layout="position" layoutId={`line-item-${index}`}>
          {name}
        </motion.p>
      </li>
    </AnimateSharedLayout>
  );
}
