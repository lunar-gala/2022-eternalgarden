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

const leftFlowers = {
  lineList: {
    x: 0,
  },
  lineOpen: {
    x: '-45px',
  },
};

const rightFlowers = {
  lineList: {
    x: 0,
  },
  lineOpen: {
    x: '45px',
  },
};

export { transition, button, container, leftFlowers, rightFlowers };
