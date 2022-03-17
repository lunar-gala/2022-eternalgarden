const transition = {
  duration: 1,
  ease: 'easeOut',
};

const button = {
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const container = {
  hidden: {
    opacity: 0,
    duration: 0.1,
  },
  visible: {
    opacity: 1,
    duration: 0.1,
  },
};

const flowerShiftVariants = {
  lineList: {
    x: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  lineOpen: {
    x: '-65px',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const getFlowerVariants = (shift) => {
  const leftFlowers = {
    ...flowerShiftVariants,
    lineOpen: { x: `-${shift}px` },
  };
  const rightFlowers = {
    ...flowerShiftVariants,
    lineOpen: { x: `${shift}px` },
  };
  return { leftFlowers, rightFlowers };
};

const flowerStagger = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.05,
      ease: 'easeOut',
      delay: 0.07,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
      delay: 0.07,
      ease: 'easeOut',
    },
  },
};

export { transition, container, getFlowerVariants, flowerStagger };
