import React from 'react';
import { useState } from 'react';
import './card.scss';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { items, item, firstItem } from './animation';

export default function Card({
  name = '',
  designers,
  description,
  images,
  sublines,
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
      controls.start('lineList');
      setOpen(false);
    }, 500);
  };

  return (
    <AnimateSharedLayout>
      {open && (
        <motion.div onClick={closeCard} className="card">
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
                <CardContent
                  name={name}
                  designers={designers}
                  description={description}
                  images={images}
                  sublines={sublines}
                />
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
          variants={open ? firstItem : item}
          layout="position"
          layoutId={`line-item-${index}`}
        >
          {name}
        </motion.p>
      </li>
    </AnimateSharedLayout>
  );
}

function CardContent({ name = '', designers, description, images, sublines }) {
  return (
    <motion.div
      className="card-content"
      variants={items}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {designers && <h2 className="card-designers">{designers.join(', ')}</h2>}
      {description && (
        <p
          className="card-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      )}
      {images && (
        <div className="card-images">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${name} line shoot number ${index}`}
            />
          ))}
        </div>
      )}
      {sublines && (
        <div className="sublines">
          {sublines.map(({ name, designers }, index) => (
            <div key={`subline-${index}`}>
              <p className="subline-name">{name}</p>
              <p className="subline-name">{designers.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
