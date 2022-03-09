import React, { useEffect } from 'react';
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
  controls,
  onSelect,
  selected,
}) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(false);

  useEffect(() => {
    if (open) {
      controls.start('shifted');

      console.log(open);
      console.log(selected);
    } else {
      controls.start('positioned');
    }
  }, [controls, open]);

  const openCard = () => {
    onSelect(true);
    setOpen(true);
    setContent(true);
    // setCardOpen(true);
  };

  const closeCard = () => {
    setContent(false);
    setTimeout(() => {
      setOpen(false);
      onSelect(false);

      // setCardOpen(false);
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
              className="card-heading"
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
                  <motion.h2 variants={item} className="card-designers">
                    {designers.join(', ')}
                  </motion.h2>
                  <motion.p
                    variants={item}
                    className="card-description"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></motion.p>
                  <motion.div variants={item} className="card-images">
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
          animate={{ opacity: selected ? 0 : 1 }}
          layout="position"
          layoutId={`line-item-${index}`}
        >
          {name}
        </motion.p>
      </li>
    </AnimateSharedLayout>
  );
}
