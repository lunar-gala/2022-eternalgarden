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

<<<<<<< HEAD
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

=======
>>>>>>> 9278e2334d74a4c39de28f0ec22f6c231eda87e8
export default function Card({
  className = '',
  name = '',
  designers = [],
  description = '',
  images = [],
  index,
}: Props) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(false);

  const openCard = () => {
    setOpen(true);
    setContent(true);
  };

  const closeCard = () => {
    setOpen(false);
  };

  let classes = classNames({
    card: true,
    [className]: true,
  });

  return (
    <AnimateSharedLayout>
<<<<<<< HEAD
      {open && (
        <motion.div onClick={() => setContent(false)} className={classes}>
          <motion.div className="card-main">
            <motion.p
              layout="position"
              layoutId={`line-item-${index}`}
              className="card-heading"
            >
              {name}
            </motion.p>
            <AnimatePresence onExitComplete={closeCard}>
              {content && (
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
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
      <li onClick={openCard} className="lines-item">
=======
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
>>>>>>> 9278e2334d74a4c39de28f0ec22f6c231eda87e8
        <motion.p layout="position" layoutId={`line-item-${index}`}>
          {name}
        </motion.p>
      </li>
    </AnimateSharedLayout>
  );
}
