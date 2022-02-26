import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import './card.scss';
import { motion, AnimateSharedLayout } from 'framer-motion';
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
    <AnimateSharedLayout>
      {open ? (
        <motion.div
          onClick={() => setOpen(false)}
          layoutId={`line-item-${index}`}
          className={classes}
        >
          <div className="card-main">
            <h1 className="card-heading">{name}</h1>
            <h2 className="card-designers">{designers.join(', ')}</h2>
            <p className="card-description">{description}</p>
            <div className="card-images">
              {images.map((img, index) => (
                <img src={img} alt={`${name} line shoot number ${index + 1}`} />
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.li
          onClick={() => setOpen(true)}
          layoutId={`line-item-${index}`}
        >
          {name}
        </motion.li>
      )}
    </AnimateSharedLayout>
  );
}
